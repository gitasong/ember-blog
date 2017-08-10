import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  image: DS.attr(),
  teaser: DS.attr(),
  fulltext: DS.attr(),
  comments: DS.hasMany('review', { async: true })
});
