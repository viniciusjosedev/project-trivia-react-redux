import { getQuestions } from '../api/getToken';
import localStorageMock from './mocks/localStorageMock.test';
import { fetchDataMockado } from './mocks/data';

const mockLocalStorage = () => {
	Object.defineProperty(window, 'localStorage', {
		value: new localStorageMock,
	})
}

describe('', () => {
	
	it('', async () => {
		mockLocalStorage();

		global.fetch = jest.fn().mockResolvedValue({
			json: jest.fn().mockResolvedValue(fetchDataMockado),
		})

		expect(await getQuestions('b24dd09bedde37fc2cb0de259bf2bcb01b971f84cde682d4d887003758d04369')).toEqual(fetchDataMockado);

		
	})
	
})