import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        image: this.get('image'),
        teaser: this.get('teaser'),
        fulltext: this.get('fulltext'),
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
