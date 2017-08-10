import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  // model() {
  //   return Ember.RSVP.hash({
  //     posts: this.store.findAll('post'),
  //     comments: this.store.findRecord('post', params.post_id)
  //   });
  // },
  actions: {
    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          post.set(key, params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },
    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    },
    destroyComment(comment) {
      review.destroyRecord();
      this.transitionTo('post');
    }
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('post', post);
    }
  }
});
