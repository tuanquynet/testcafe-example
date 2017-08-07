/* © 2017 TestCafe Example
 * @author Quy Tran
 * Test case using testcafe api
 */
import { /* Selector, */ ClientFunction } from 'testcafe';

const localStorageSet = ClientFunction((key, val) => localStorage.setItem(key, val));
const localStorageGet = ClientFunction(key => localStorage.getItem(key));

module.exports = {
	localStorageSet,
	localStorageGet,
};
