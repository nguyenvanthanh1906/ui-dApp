<template>
  <div class="no-bottom no-top" id="content">
    <div id="top"></div>

    <!-- section begin -->
    <section
      id="subheader"
      class="text-light"
      data-bgimage="url(images/background/subheader.jpg) top"
    >
      <div class="center-y relative text-center">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h1>Explore</h1>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- section close -->

    <!-- section begin -->
    <section aria-label="section">
      <div class="container">
        <div class="row wow fadeIn">
          <div class="col-lg-12">
            <div class="items_filter">
              <form
                action="blank.php"
                class="row form-dark"
                id="form_quick_search"
                method="post"
                name="form_quick_search"
              >
                <div class="col text-center">
                  <input
                    class="form-control"
                    id="name_1"
                    name="name_1"
                    placeholder="search item here..."
                    type="text"
                  />
                  <a href="#" id="btn-submit"
                    ><i class="fa fa-search bg-color-secondary"></i
                  ></a>
                  <div class="clearfix"></div>
                </div>
              </form>

              <div id="item_category" class="dropdown">
                <a href="#" class="btn-selector">All categories</a>
                <ul>
                  <li class="active"><span>All categories</span></li>
                  <li><span>Art</span></li>
                  <li><span>Music</span></li>
                  <li><span>Domain Names</span></li>
                  <li><span>Virtual World</span></li>
                  <li><span>Trading Cards</span></li>
                  <li><span>Collectibles</span></li>
                  <li><span>Sports</span></li>
                  <li><span>Utility</span></li>
                </ul>
              </div>

              <div id="buy_category" class="dropdown">
                <a href="#" class="btn-selector">Buy Now</a>
                <ul>
                  <li class="active"><span>Buy Now</span></li>
                  <li><span>On Auction</span></li>
                  <li><span>Has Offers</span></li>
                </ul>
              </div>

              <div id="items_type" class="dropdown">
                <a href="#" class="btn-selector">All Items</a>
                <ul>
                  <li class="active"><span>All Items</span></li>
                  <li><span>Single Items</span></li>
                  <li><span>Bundles</span></li>
                </ul>
              </div>
            </div>
          </div>
          <!-- nft item begin -->
          <Item></Item>

          <div class="col-md-12 text-center">
            <a href="#" id="loadmore" class="btn-main wow fadeInUp lead"
              >Load more</a
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ethers } from "ethers";
import Item from '~/components/index/Item.vue'
export default {
  name: "IndexPage",
  components: {
    Item
  },
  layout: "Default",
  data() {
    return { balance: 0 };
  },
};
</script>
