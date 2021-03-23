import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Catanduva',
      slug: 'catanduva',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'São José do Rio Preto',
      slug: 'sao jose do rio preto',
      location: {
        latitude: 129,
        longitude: -50
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/Catanduva/i)).toBeInTheDocument()
    expect(screen.getByTitle(/São José do Rio Preto/i)).toBeInTheDocument()
  })
})
