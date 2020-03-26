<script>
const positions = Array.from(Array(20), () => ({
  top:    Math.floor(700 * Math.abs(Math.cos(Math.random() * Math.PI))),
  left:   Math.floor(1440 * Math.abs(Math.cos(Math.random() * Math.PI))),
  size:   Math.floor( 30 + 40 * Math.random()),
}))

export default {
  render: function (createElement) {
    return createElement('div', [
      positions
        .map((position) => {
          return createElement('img', {
            attrs: {
              src: '/img/logo-outline.svg'
            },
            style: {
              position: 'absolute',
              top: `${position.top}px`,
              left: `${position.left}px`,
              height: `${position.size}px`,
              width: `${position.size}px`,
              opacity: `${Math.floor( 60+ 40 * Math.random())}%`
            }
          })
        })
    ])
  },
}
</script>