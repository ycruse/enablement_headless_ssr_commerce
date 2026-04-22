// lib/commerce-engine-config.ts
import {
  CommerceEngineDefinitionOptions,
  defineProductList,
  defineRecommendations,
  defineCart,
  defineSearchBox,
  defineContext,
  defineSummary,
  defineStandaloneSearchBox,
  defineInstantProducts,
  defineParameterManager,
  defineFacetGenerator,
  defineSort,
  definePagination,
  defineProductView,
  ContextState,
} from "@coveo/headless-react/ssr-commerce";

export const defaultContext: {
  language: string;
  country: string;
  currency: ContextState["currency"];
} = {
  language: "en",
  country: "US",
  currency: "USD",
};

export default {
  configuration: {
    organizationId: "yorickcruseenablementaguon9qx",
    accessToken: "xxc1aa2397-b4e8-4b44-b5cf-addd9334f855",
    context: {
      ...defaultContext,
      view: {
        url: "https://sports.barca.group",
      },
    },
    analytics: {
      trackingId: "fasttrack.sports",
    },
  },
  controllers: {
    cart: defineCart(),
    context: defineContext(),
    summary: defineSummary(),
    productList: defineProductList(),
    searchBox: defineSearchBox(),
    standaloneSearchBox: defineStandaloneSearchBox({
      options: { redirectionUrl: "/search" },
    }),
    instantProducts: defineInstantProducts(),
    popularViewedHome: defineRecommendations({
      options: {
        slotId: process.env.NEXT_PUBLIC_POPULAR_VIEWED_HOME_SLOT_ID ?? "91f37f6d-bb54-4e1e-8e08-4cbcfc597adb",
      },
    }),
    parameterManager: defineParameterManager(),
    facetGenerator: defineFacetGenerator(),
    sort: defineSort(),
    pagination: definePagination(),
    productView: defineProductView(),
  },
} satisfies CommerceEngineDefinitionOptions;
