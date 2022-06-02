<!-- Please remove this file from your project -->
<template>
  <div class="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
    <div class="nft__item">
      <div class="author_list_pp">
        <a
          href="author.html"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Creator: Lori Hart"
        >
          <img class="lazy" src="images/author/author-4.jpg" alt="" />
          <i class="fa fa-check"></i>
        </a>
      </div>
      <div class="nft__item_wrap">
        <div class="nft__item_extra">
          <div class="nft__item_buttons">
            <button onclick="location.href='item-details.html'">Buy Now</button>
            <div class="nft__item_share">
              <h4>Share</h4>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io"
                target="_blank"
                ><i class="fa fa-facebook fa-lg"></i
              ></a>
              <a
                href="https://twitter.com/intent/tweet?url=https://gigaland.io"
                target="_blank"
                ><i class="fa fa-twitter fa-lg"></i
              ></a>
              <a
                href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"
                ><i class="fa fa-envelope fa-lg"></i
              ></a>
            </div>
          </div>
        </div>
        <a href="item-details.html">
          <img
            src="images/items/static-7.jpg"
            class="lazy nft__item_preview"
            alt=""
          />
        </a>
      </div>
      <div class="nft__item_info">
        <a href="item-details.html">
          <h4>Cute Astronout</h4>
        </a>
        <div class="nft__item_click">
          <span></span>
        </div>
        <div class="nft__item_price">0.005 ETH<span>1/30</span></div>
        <div class="nft__item_action">
          <a href="#">Place a bid</a>
        </div>
        <div class="nft__item_like">
          <i class="fa fa-heart"></i><span>32</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
