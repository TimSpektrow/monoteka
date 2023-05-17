document.querySelectorAll('.offer__btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.offer__btn').forEach(function(tabContent) {
          tabContent.classList.remove('offer__btn_active')
      })

      document.querySelector(`[data-path="${path}"]`).classList.add('offer__btn_active')
  })
})
