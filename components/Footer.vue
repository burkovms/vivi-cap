<script setup lang="ts">
  const contacts = {
    phones: ['+38 050 70 30 10', '+38 093 50 30 20'],
    emails: ['info@viviplast.com', 'sales@viviplast.com'],
  };

  const social = [
    {
      name: 'Telegram',
      icon: '/img/soc-icon-1.svg',
      link: '#',
    },
    {
      name: 'Instagram',
      icon: '/img/soc-icon-2.svg',
      link: '#',
    },
  ];
</script>

<template>
  <footer id="footer" class="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-12 col-xl-3">
          <NuxtLink to="/" class="logo">
            <NuxtImg src="/img/logo-footer.svg" alt="Logotype" loading="lazy" />
          </NuxtLink>
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-xl-2 footer-menu__wrap">
          <ul class="footer-menu menu">
            <li class="anchor-link">
              <a class="link-animate" href="#originality">Переваги</a>
            </li>
            <li class="anchor-link">
              <a class="link-animate" href="#footer">Контакти</a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-6 col-md-6 col-xl-2 footer-menu__wrap">
          <ul class="footer-menu menu">
            <li>
              <NuxtLink class="link-animate" to="/legal-information">
                Юридична інформація
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col-12 col-sm-6 col-xl-3">
          <div class="footer-contacts__wrap">
            <ul class="footer-contacts">
              <li v-for="(phone, index) in contacts.phones" key="index">
                <a class="link-animate" :href="`tel:${phone}`">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#ffdc22"
                  >
                    <path
                      d="M14.6329 11.2746L12.675 9.32084C11.9758 8.62307 10.7871 8.90221 10.5074 9.80927C10.2976 10.4373 9.5984 10.7862 8.96909 10.6466C7.57063 10.2977 5.6827 8.48352 5.33308 7.01822C5.12331 6.3902 5.54285 5.69244 6.17216 5.48313C7.08116 5.20403 7.36086 4.01783 6.66162 3.32007L4.70377 1.36633C4.14439 0.877891 3.30531 0.877891 2.81584 1.36633L1.4873 2.69208C0.158758 4.08761 1.62715 7.78576 4.91354 11.0652C8.19994 14.3447 11.9059 15.8798 13.3043 14.4843L14.6329 13.1585C15.1224 12.6003 15.1224 11.763 14.6329 11.2746Z"
                    ></path>
                  </svg>
                  <span>{{ phone }}</span>
                </a>
              </li>
            </ul>
            <ul class="footer-contacts">
              <li v-for="(email, index) in contacts.emails" key="index">
                <a class="link-animate" :href="`mailto:${email}`">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#ffdc22"
                  >
                    <path
                      d="M5.392 8.5675L1.73867 12.2208C1.59133 11.9568 1.5 11.6568 1.5 11.3335V5.44216L5.392 8.5675ZM7.49467 8.9735C7.78933 9.2035 8.21067 9.2035 8.51067 8.96883L14.3533 4.27683C14.3807 4.2555 14.412 4.24616 14.442 4.2315C14.2453 3.43083 13.5267 2.8335 12.6667 2.8335H3.33333C2.47333 2.8335 1.75467 3.43083 1.558 4.2315C1.58733 4.24683 1.61933 4.2555 1.64667 4.27683L7.49467 8.9735ZM9.13133 9.7535C8.796 10.0142 8.396 10.1442 7.998 10.1442C7.6 10.1442 7.20533 10.0155 6.874 9.7575L6.176 9.19683L2.44533 12.9275C2.70933 13.0748 3.00933 13.1662 3.33267 13.1662H12.666C12.9893 13.1662 13.2893 13.0748 13.5533 12.9275L9.82333 9.1975L9.13133 9.7535ZM10.608 8.5675L14.2613 12.2208C14.4087 11.9568 14.5 11.6568 14.5 11.3335V5.44216L10.608 8.5675Z"
                    ></path>
                  </svg>
                  <span>{{ email }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-xl-2">
          <Social :social="social" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
  .footer {
    margin-top: 150px;
    padding: 52px 0;
    background-color: $black;
    font-family: $font_family_accent;
    font-size: 18px;
    @media (max-width: $media_sm) {
      margin-top: 100px;
    }

    .social {
      justify-content: flex-end;
      @media (max-width: $media_xs) {
        justify-content: flex-start;
      }
    }

    .logo {
      @media (max-width: $media_md) {
        margin-bottom: 16px;
      }
    }
  }

  .footer-menu {
    text-transform: uppercase;
    line-height: 1.8;

    &__wrap {
      align-self: start;
    }

    li {
      + li {
        margin-top: 4px;
      }
    }

    a {
      font-size: 16px;
      display: inline-flex;
    }
  }

  .footer-contacts {
    &__wrap {
      line-height: 1;
      display: flex;
      align-items: center;
      @media (max-width: $media_xxl) {
        flex-direction: column;
        align-items: flex-start;
      }
      @media (max-width: $media_lg) {
        margin-top: 40px;
      }
    }
    + .footer-contacts {
      margin-left: 40px;
      @media (max-width: 1860px) {
        margin-left: 15px;
      }
      @media (max-width: $media_xxl) {
        margin-left: 0;
      }
    }
    li {
      + li {
        margin-top: 4px;
      }
      a {
        line-height: 32px;
        display: flex;
        align-items: center;
        gap: 12px;
      }
    }
  }
</style>
