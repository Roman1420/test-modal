function ShowProducts(show, product_type, cost, min_count, max_count) {
  $bus.$emit("ShowProducts", show,  product_type, cost, min_count, max_count )
}