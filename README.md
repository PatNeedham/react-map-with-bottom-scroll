# react-map-with-bottom-scroll

Goal is to make a web-based version of [this](https://codedaily.io/tutorials/9/Build-a-Map-with-Custom-Animated-Markers-and-Region-Focus-when-Content-is-Scrolled-in-React-Native) in a concise and configurable manner.

Will rely on [`react-google-maps`](https://github.com/tomchentw/react-google-maps) for map implementation.

Example useage will end up like:
```jsx
import MapWithBottomScroll from 'react-map-with-bottom-scroll'

render() {
  return (
    <MapWithBottomScroll
      gMapsAPIKey={API_KEY}
      data={data}
      mapProps={{...}}
      bottomScrollStyle={{...}}
      bottomScrollBoxStyle={{...}}
      onBoxClick={(index) => {
        // when a box within the bottom scroll view is clicked / tapped
      }}
      onBoxMouseEnter={(index) => {
        // when a box within the bottom scroll view is being hovered over with the cursor
      }}
      onBoxMouseLeave={(index) => {
        // when the mouse is no longer hovering within a bottom scroll view box 
      }}
    >
  )
}

```