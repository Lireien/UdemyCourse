window.addEventListener('DOMContentLoaded', () => {

  const tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

    function hideTabCOntent() {
        tabsContent.forEach(tab => {
            tab.classList.add('hide');
            tab.classList.remove('show', 'fade');
        });

        tabs.forEach(tab => {
          tab.classList.remove('tabheader__item_active');
        });
    }


    function showTabContent(i = 0) {
      tabsContent[i].classList.add('show', 'fade');
      tabsContent[i].classList.remove('hide');
      tabs[i].classList.add('tabheader__item_active');
    }

    hideTabCOntent();
    showTabContent();

    tabsParent.addEventListener('click', (evt) => {
      const target = evt.target;

      if (target && target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
          if (target == item) {
            hideTabCOntent();
            showTabContent(i);
          }
        });
      }
    });

});