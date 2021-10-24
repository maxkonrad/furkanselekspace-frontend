<template>
  <teleport to="body">
    <div class="about">
      <div class="about-box">
        <img
          class="background-image"
          src="@/assets/about-page-background.jpg"
          alt=""
        />
        <img
          src="@/assets/furkan.jpeg"
          alt=""
          class="profile-photo rounded-circle"
        />
        <article class="article">
          <p class="header">Furkan Kimdir?</p>
          <p class="body">
            Selam! Ben, sen ve nerdeyse tüm insanlar gibi sıradan bir insanım.
            Beni Furkan diye çağırıyorlar ve burası benim kişisel blogum. Burada
            düşüncelerimi, tecrübelerimi, öğrendiklerimi ve kompozisyonlarımı
            paylaşıyorum. Evrim, Elektronik ve Yazılım gibi çoğunluğa sıkıcı
            gelen ama bana göre zevkli olan alanlara ilgim var. Çok umrunuzda
            değil biliyorum ama benimle ilgili sıkıcı bilgiler de bulunsun
            burada: 2001 doğumluyum; Denizli, Afyon ve Burdur arasında geçti
            hayatım. 2020 yılında liseden mezun oldum ve 2021 yılında İzmir
            Yüksek Teknoloji Enstitüsü Elektronik ve Haberleşme Mühendisliğini
            kazandım. Şu an bir işte çalışmıyorum ama temel ihtiyaçlarımın ailem
            tarafından karşılandığı bu günleri verimli bir şekilde geçirmek için
            bol bol öğreniyorum. Sağlıcakla kalın!
          </p>
        </article>
      </div>
      <Footer class="footer" />
    </div>
  </teleport>
</template>
<script>
import Footer from "@/components/footer.vue";
export default {
  name: "About",
  components: {
    Footer,
  },
  created: function () {
    document.body.style.backgroundColor = "#241F25";
  },
};
</script>
<style scoped>
.backgroundColor {
  background-color: #241f25;
}
.header {
  font-size: 3vw;
}
.body {
  font-size: 1.5vw;
}
.profile-photo {
  width: 15%;
  display: flex;
  padding-top: 1%;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
  position: relative;
}
.article {
  position: absolute;
  z-index: 1;
  background-color: rgba(247, 247, 242, 0.7);
  text-align: center;
  margin: 5% 15%;
  padding: 3% 5%;
}
.background-image {
  position: absolute;
  max-width: 100%;
  height: auto;
  z-index: 0;
}
.footer {
  position: relative;
  margin-top: 100%;
}
</style>
