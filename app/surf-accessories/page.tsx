import ProductList from "@/components/product-list";
import { ListingProvider } from "@/components/providers/providers";
import FacetGenerator from "@/components/facets/facet-generator";
import { buildParameterSerializer } from "@coveo/headless-react/ssr-commerce";
import ParameterManager from "@/components/parameter-manager";
import Sort from "@/components/sort";
import Pagination from "@/components/pagination";
import { fetchCoveoStaticState } from "@/lib/fetch-coveo-static-state";

export default async function SurfAccessories({ searchParams }: { searchParams: Promise<URLSearchParams> }) {
  const { deserialize } = buildParameterSerializer();
  const urlParameters = deserialize(await searchParams);

  const { staticState, navigatorContext } = await fetchCoveoStaticState("listingEngineDefinition", {
    urlParameters,
    url: "https://sports.barca.group/surf-accessories",
  });

  return (
    <ListingProvider staticState={staticState} navigatorContext={navigatorContext.marshal}>
      <ParameterManager url={navigatorContext.location} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Surf Accessories</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 order-1 lg:order-1">
            <FacetGenerator />
          </div>

          <div className="lg:col-span-3 order-2 lg:order-2">
            <div className="flex justify-end mb-4">
              <Sort />
            </div>
            <ProductList />
            <div className="flex justify-end mt-6">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </ListingProvider>
  );
}

export const dynamic = "force-dynamic";
