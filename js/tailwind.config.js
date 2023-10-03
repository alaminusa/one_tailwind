tailwind.config =  {
    theme: {
      extend: {
        // my code will start here
        
        // all color part start
        colors: {
          bodyBg: ' rgba(255, 255, 255, 0.5)',
          headerColor: 'rgba(22, 12, 109, 0.50)',
          hoverColor: '#1BBF00',
          bannerh1Color: '#FAFAFE',
          overlayColor: 'rgba(106, 98, 197, 0.90)',
          clintColor: '#141135',
          clintAfterColor: ' rgba(79, 88, 95, 0.2)',
          readMoreColor: ' rgba(25, 191, 0, 0.3)',
          readMoreColor1: ' rgba(255, 255, 255, 0.3)',
          footerColor: '#FEFEFE',         
        },
        
        // all color part end
        
        // all container start
        maxWidth: {
          headerContainer: '1170px',
          bannerContainer: '962px',

        },
        // all container end

        // Font Family start
        fontFamily: {
          open: ["Open Sans", "sans-serif"],
          paprika: ['Paprika', 'cursive'],
          nunito: ['Nunito', 'sans-serif'],
          quick: ['Quicksand', 'sans-serif']
        },
        // Font Family end

        // Font Family start
        backgroundImage: {
          bannerImage: "url('image/banner.jpg')",
          chooseBg: "url('image/choosebg.png')",
          counterBg: "url('image/couterbg.png')",
          likeBg: "url('image/likebg.png')",
        },
        // Font Family end

        // Font size start
        // Font size end
        
        // my code will end here
      },
    },
  };