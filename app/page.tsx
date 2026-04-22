import { RecommendationProvider } from "@/components/providers/providers";
import PopularViewedRecommendations from "@/components/recommendations/popular-viewed";
import { fetchCoveoStaticState } from "@/lib/fetch-coveo-static-state";

export default async function Home() {
  const { staticState, navigatorContext } = await fetchCoveoStaticState("recommendationEngineDefinition", {
    recommendationsSlots: ["popularViewedHome"],
    url: "https://sports.barca.group",
  });

  return (
    <RecommendationProvider staticState={staticState} navigatorContext={navigatorContext.marshal}>
      <div>
        <h2>Welcome to our commerce store </h2>
        <PopularViewedRecommendations />
      </div>
    </RecommendationProvider>
  );
}

export const dynamic = "force-dynamic";
