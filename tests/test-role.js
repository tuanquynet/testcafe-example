/* © 2017 TestCafe Example
 * @author Quy Tran
 * Test case using testcafe api
 */
import { t, Role, ClientFunction, Selector } from 'testcafe';
import clientLocalStorage from './utils/local-storage';

const getLocation = ClientFunction(() => location.href);

const someRole = Role('http://localhost:8080/signin.html', async () => {
	someRole.preservedUrl = await getLocation();
	await t
		.click(Selector('.sign-in'))
		.wait(500);
});

async function switchToRoleAndKeepUrl(role) {
	await t.useRole(role);

	console.log('session activated', role.preservedUrl);

	if (role.preservedUrl) {
		await t.navigateTo(role.preservedUrl);
	}
}

fixture `test-role`
	.page`http://localhost:8080/signin.html`;

test('Test', async () => {
	await switchToRoleAndKeepUrl(someRole);
	await t.wait(1000)
		.expect(1).eql(1);
	// debugger;
});

test('Test leave', async () => {
	await t
		.useRole(someRole)
		.wait(2000)
		.navigateTo('leave.html');
	console.log(await clientLocalStorage.localStorageGet('token'));
	debugger;
});
