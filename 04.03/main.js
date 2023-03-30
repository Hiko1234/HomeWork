// tabs nav

const TABS_NAV = document.querySelectorAll('.main__nav_btn');
const CONTENT = document.querySelectorAll('.main__content-section');
  
TABS_NAV.forEach((tab) => {
    tab.addEventListener('click', () => {
        TABS_NAV.forEach((tab) => {
        tab.classList.remove('active');
      });
      tab.classList.add('active');
      const DATA_ATTRIBUTE = tab.getAttribute('data-nav');
      CONTENT.forEach((item) => {
        item.classList.add('d-none');
        if(item.getAttribute('data-nav') == DATA_ATTRIBUTE){
          item.classList.remove('d-none');
        }
      });
    })
  });

// ---------------

// tabs messanges

const TABS_MESSANGES = document.querySelectorAll('.messanges__person');
const MESSANGES = document.querySelectorAll('.messanges__items_person');
  
TABS_MESSANGES.forEach((tab) => {
    tab.addEventListener('click', () => {
        TABS_MESSANGES.forEach((tab) => {
        tab.classList.remove('active');
      });
      tab.classList.add('active');
      const DATA_ATTRIBUTE = tab.getAttribute('data-messanges');
      MESSANGES.forEach((item) => {
        item.classList.add('d-none');
        if(item.getAttribute('data-messanges') == DATA_ATTRIBUTE){
          item.classList.remove('d-none');
        }
      });
    })
  });

// ---------------