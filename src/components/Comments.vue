<template>
  <div class="comments">
    <section class="comment-sec-1">
      <div class="comment-wrapper">
        <h5 class="c-name">Brad Traversy</h5>
        <label class="c-time">07:23:00</label>
        <p class="single-comment">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ducimus delectus ad sed doloribus quibusdam aliquid dicta adipisci alias rem! Ipsam at culpa blanditiis, nobis totam beatae molestiae ipsa aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur mollitia inventore illum accusamus vel dolorum porro? Commodi cum explicabo fuga quod minima soluta illum impedit fugit, quam natus sapiente numquam!
        </p>
        
        <h5 class="c-name mt-4">Lynda Olin</h5>
        <label class="c-time">03:12:09</label>
        <p class="single-comment">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ducimus delectus ad sed doloribus quibusdam aliquid dicta adipisci alias rem! Ipsam at culpa blanditiis, nobis totam beatae molestiae ipsa aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur mollitia inventore illum accusamus vel dolorum porro? Commodi cum explicabo fuga quod minima soluta illum impedit fugit, quam natus sapiente numquam!
        </p>
        <h5 class="c-name mt-4">Kevin Brien</h5>
        <label class="c-time">12:54:40</label>
        <p class="single-comment">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ducimus delectus ad sed doloribus quibusdam aliquid dicta adipisci alias rem! Ipsam at culpa blanditiis, nobis totam beatae molestiae ipsa aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur mollitia inventore illum accusamus vel dolorum porro? Commodi cum explicabo fuga quod minima soluta illum impedit fugit, quam natus sapiente numquam!
        </p>
        <input type="text" placeholder="Enter comment"> <br>
        <button>Comment</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  data(){
    return{

    }
  }
}
</script>

<style scoped>
.comment-sec-1{}
.comment-wrapper{
  padding-bottom: 30px;
}
.c-name{
  font-size: 16px;
  font-weight: 600;
  color: #000;
}
.c-time{
  color: #8e8e8e;
  font-size: 12px;
  display: inline-block;
  line-height: 1;
  margin-bottom: 4px;
}
.single-comment{
  font-size: 14px;
  color: #000;
  max-width: 850px;
  border: 1px solid #eee;
  box-shadow: 0 1px 2px #c9cccd;
  padding: 10px;
  border-radius: 2px;
  background: #fff;
}
.comment-wrapper input{
  border: 1px solid #eee;
  box-shadow: 0 0 6px rgba(2, 3, 3, .1);
  font-size: 14px;
  max-width: 720px;
  width: 100%;
  margin: 25px 0 0;
  padding: 7px;
  color: #000;
}
.comment-wrapper button{
  width: 145px;
  background-image: linear-gradient(0deg, #ac0000, #c00000, #d40000, #e80000, #fd0000);
  color: #fff;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
  height: 37px;
  border: none;
  margin-top: 20px;
}
</style>