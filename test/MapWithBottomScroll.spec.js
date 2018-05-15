// Link.react.test.js
import React from 'react'
import renderer from 'react-test-renderer'
import sinon from 'sinon'
import MapWithBottomScroll from '../src/components/MapWithBottomScroll'

describe('<MapWithBottomScroll>', () => {

  describe('PropTypes validation', () => {

    beforeEach(() => {
      sinon.stub(console, 'error')
    })
    
    afterEach(() => {
      console.error.restore()
    })

    describe('Missing required props results in error', () => {
  
      test('Missing data', () => {
        try {
          const component = renderer.create(
            <MapWithBottomScroll gMapsAPIKey="12345" />
          );
        } catch (err) {
          sinon.assert.called(console.error)
        }
      })
  
      test('Missing gMapsAPIKey', () => {
        try {
          const component = renderer.create(
            <MapWithBottomScroll
              data={[
                {lat: 123, lng: 123},
                {lat: 123, lng: 123}
              ]}
            />
          );
        } catch (err) {
          sinon.assert.called(console.error)
        }
      })
  
    })
    
    describe('Not missing required props', () => {
  
      test('No error', () => {
        const component = renderer.create(
          <MapWithBottomScroll
            data={[
              {lat: 123, lng: 123},
              {lat: 123, lng: 123}
            ]}
            gMapsAPIKey="12345"
          />
        )
        sinon.assert.notCalled(console.error)
      })
    })
  })

})
