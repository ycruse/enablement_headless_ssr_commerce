"use client";

import { useEffect } from "react";
import { usePopularViewedHome } from "@/lib/commerce-engine";
import ProductButtonWithImage from "@/components/product-button-with-image";
import styles from "./popular-viewed.module.css";

export default function PopularViewedRecommendations() {
  const { state, methods } = usePopularViewedHome();

  useEffect(() => {
    methods?.refresh?.();
  }, [methods]);

  if (state.isLoading && state.products.length === 0) {
    return <div className={styles.carousel}>Loading recommendations...</div>;
  }

  if (state.error) {
    return (
      <section className={styles.carousel} aria-label="Recommended products">
        <h3 className={styles.headline}>Recommended products</h3>
        <p>We could not load recommendations for this slot.</p>
      </section>
    );
  }

  if (state.products.length === 0) {
    return (
      <section className={styles.carousel} aria-label="Recommended products">
        <h3 className={styles.headline}>Recommended products</h3>
        <p>No recommendations were returned for this slot yet.</p>
      </section>
    );
  }

  return (
    <section className={styles.carousel} aria-label="Recommended products">
      <h3 className={styles.headline}>{state.headline || "Popular viewed products"}</h3>
      <div className={styles.carouselContainer}>
        {state.products.map((product) => (
          <div className={styles.productCard} key={product.permanentid}>
            <ProductButtonWithImage product={product} methods={methods} />
          </div>
        ))}
      </div>
    </section>
  );
}
