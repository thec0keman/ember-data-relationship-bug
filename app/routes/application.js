import Route from '@ember/routing/route';
import Pretender from 'pretender';

const data = {
  session: {
    id: 123,
    name: 'session-1',
    location_ids: [1, 2]
  },
  locations: [
    {
      id: 1,
      name: 'location-1',
      user_id: 123
    },
    {
      id: 2,
      name: 'location-2',
      user_id: 123
    }
  ]
}

new Pretender(function () {
  this.get('/sessions/123', function () {
    return [
      200,
      { 'Content-Type': 'application/json' },
      JSON.stringify(data)
    ];
  });

  this.put('/sessions/123', function () {
    return [
      200,
      { 'Content-Type': 'application/json' },
      JSON.stringify(data)
    ];
  });
});

export default Route.extend({
  model() {
    return this.store.findRecord('session', 123);
  }
});
