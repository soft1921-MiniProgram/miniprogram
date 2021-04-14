Component({
  options: {
      addGlobalClass: true,
      pureDataPattern: /^_/,
      multipleSlots: true
  },
  properties: {
      tabs: { type: Array, value: [] },
      tabClass: { type: String, value: '' },
      swiperClass: { type: String, value: '' },
      activeClass: { type: String, value: '' },
      tabUnderlineColor: { type: String, value: '#FB7299' },
      tabActiveTextColor: { type: String, value: '#FB7299' },
      tabInactiveTextColor: { type: String, value: '#000000' },
      tabBackgroundColor: { type: String, value: '#ffffff' },
      activeTab: { type: Number, value: 0 },
      duration: { type: Number, value: 500 }
  },
  data: {
      currentView: 0
  },
  observers: {
      activeTab: function activeTab(_activeTab) {
          var len = this.data.tabs.length;
          if (len === 0) return;
          var currentView = _activeTab - 1;
          if (currentView < 0) currentView = 0;
          if (currentView > len - 1) currentView = len - 1;
          this.setData({ currentView: currentView });
      }
  },
  lifetimes: {
      created: function created() {}
  },
  methods: {
      handleTabClick: function handleTabClick(e) {
          var index = e.currentTarget.dataset.index;
          this.setData({ activeTab: index });
          this.triggerEvent('tabclick', { index: index });
      },
      handleSwiperChange: function handleSwiperChange(e) {
          var index = e.detail.current;
          this.setData({ activeTab: index });
          this.triggerEvent('change', { index: index });
      }
  }
});