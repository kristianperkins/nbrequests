
require(["https://rawgit.com/caldwell/renderjson/master/renderjson.js"], function() {
  {% if r.request.headers['Content-Type'] == 'application/json' %}
    document.getElementById('{{rq_id}}').innerHTML = '';
    document.getElementById('{{rq_id}}').appendChild(renderjson({{ r.request.body }}));
  {% endif %}
  {% if r.headers['Content-Type'] == 'application/json' %}
    document.getElementById('{{rs_id}}').innerHTML = '';
    document.getElementById('{{rs_id}}').appendChild(renderjson({{ r.text }}));
  {% endif %}
});
