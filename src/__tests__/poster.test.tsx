import { render, fireEvent } from '@testing-library/react';
import fallbackImage from 'assets/image_not_found.png';
import Image from 'components/poster';

export {};

describe('Image component', () => {
  it('should render image successfully', () => {
    const url = 'https://example.com/image.jpg';
    const { getByAltText } = render(<Image url={url} altText='test image' />);

    const img = getByAltText('test image');

    expect(img).toHaveAttribute('src', url);
  });

  it('should render fallback image when url is N/A', () => {
    const { getByAltText } = render(<Image url='N/A' altText='test image' />);

    const img = getByAltText('test image');

    expect(img).toHaveAttribute('src', fallbackImage);
  });

  it('should render fallback image on image loading error', () => {
    const url = 'https://example.com/image.jpg';
    const { getByAltText } = render(<Image url={url} altText='test image' />);

    const img = getByAltText('test image');

    // Simulate an error
    fireEvent.error(img);

    expect(img).toHaveAttribute('src', fallbackImage);
  });
});
