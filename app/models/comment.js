import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  username: DS.attr(),
  post: DS.belongsTo('post', { async: true })
});
