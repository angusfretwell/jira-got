import 'should';
import getStream from 'get-stream';
import jira from './source';

const username = process.env.JIRA_USERNAME;
const endpoint = process.env.JIRA_ENDPOINT;

describe('jira-got', () => {
  it('default', async () => {
    const res = await jira('user?username=angus');
    res.body.name.should.equal('angus');
  });

  it('full path', async () => {
    const res = await jira(`${process.env.JIRA_ENDPOINT}user?username=angus`);
    res.body.name.should.equal('angus');
  });

  it('validates path', async () => {
    await jira({}).should.be.rejectedWith(TypeError);
  });

  it('accepts options', async () => {
    const res = await jira('user?username=angus', {});
    res.body.name.should.equal('angus');
  });

  it('global token option', async () => {
    process.env.JIRA_USERNAME = 'fail';
    await jira('user?username=angus', {}).should.be.rejectedWith(/401/);
    process.env.JIRA_USERNAME = username;
  });

  it('token option', async () => {
    await jira('user?username=angus', { token: 'fail' }).should.be.rejectedWith(/401/);
  });

  it('global endpoint option', async () => {
    process.env.JIRA_ENDPOINT = 'fail';
    await jira('user?username=angus', { retries: 1 }).should.be.rejectedWith(/ENOTFOUND/);
    process.env.JIRA_ENDPOINT = endpoint;
  });

  it('endpoint option', async () => {
    await jira('user?username=angus', {
      endpoint: 'fail',
      retries: 1,
    }).should.be.rejectedWith(/ENOTFOUND/);
  });

  it('stream interface', async () => {
    const res = JSON.parse(await getStream(jira.stream('user?username=angus')));
    res.name.should.equal('angus');
  });
});
