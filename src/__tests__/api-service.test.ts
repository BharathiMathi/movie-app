import { fetchFromAPI } from 'api-service';
import { API } from 'config';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('fetchFromAPI', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should return data when fetch is successful', async () => {
    const mockData = [
      {
        Title: 'Test Movie',
        Year: '2021',
        imdbID: 'tt1',
        Type: 'movie',
        Poster: 'https://example.com/poster1.jpg',
      },
    ];

    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const params = 'Test Movie';
    const data = await fetchFromAPI(params);

    expect(data).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith(`${API}${params}`);
  });

  it('should throw an error when fetch fails', async () => {
    const errorMessage = 'HTTP error! status: Internal Server Error';
    fetchMock.mockRejectOnce(new Error(errorMessage));

    const params = 'Test Movie';
    await expect(fetchFromAPI(params)).rejects.toThrow(errorMessage);
    expect(fetch).toHaveBeenCalledWith(`${API}${params}`);
  });
});
