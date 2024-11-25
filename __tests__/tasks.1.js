const puppeteer = require("puppeteer");
const path = require('path');

let browser;
let page;

beforeAll(async () => {
    browser = await puppeteer.launch({headless: true});
    page = await browser.newPage();
    await page.goto('file://' + path.resolve('./index.html'));
}, 30000);

afterAll((done) => {
    try {
        this.puppeteer.close();
    } catch (e) { }
    done();
});

describe("Interface", () => {
    it("Input field should exists", async () => {
        const input = await page.$('input[type="text"],input[type="search"]');
        expect(input).toBeTruthy();
    });
    it("Submit Button Should exist on page", async () => {
        const button = await page.$('button,input[type="submit"]');
        expect(button).toBeTruthy();
    });
});

describe("Github repositories", () => {
    it("Should display list of provided GitHub user's repos after submit", async () => {
        await page.setRequestInterception(true);
        page.on('request', request => {
            if (request.url().match(/api\.github\.com.*n-musa/i)) {
                request.respond({
                    content: 'application/json',
                    headers: {"Access-Control-Allow-Origin": "*"},
                    body: JSON.stringify([
                        {
                          "id": 322033176,
                          "node_id": "MDEwOlJlcG9zaXRvcnkzMjIwMzMxNzY=",
                          "name": "30-seconds-of-code",
                          "full_name": "n-musa/30-seconds-of-code",
                          "private": false,
                          "owner": {
                            "login": "n-musa",
                            "id": 69821516,
                            "node_id": "MDQ6VXNlcjY5ODIxNTE2",
                            "avatar_url": "https://avatars.githubusercontent.com/u/69821516?v=4",
                            "gravatar_id": "",
                            "url": "https://api.github.com/users/n-musa",
                            "html_url": "https://github.com/n-musa",
                            "followers_url": "https://api.github.com/users/n-musa/followers",
                            "following_url": "https://api.github.com/users/n-musa/following{/other_user}",
                            "gists_url": "https://api.github.com/users/n-musa/gists{/gist_id}",
                            "starred_url": "https://api.github.com/users/n-musa/starred{/owner}{/repo}",
                            "subscriptions_url": "https://api.github.com/users/n-musa/subscriptions",
                            "organizations_url": "https://api.github.com/users/n-musa/orgs",
                            "repos_url": "https://api.github.com/users/n-musa/repos",
                            "events_url": "https://api.github.com/users/n-musa/events{/privacy}",
                            "received_events_url": "https://api.github.com/users/n-musa/received_events",
                            "type": "User",
                            "site_admin": false
                          },
                          "html_url": "https://github.com/n-musa/30-seconds-of-code",
                          "description": "Short JavaScript code snippets for all your development needs",
                          "fork": true,
                          "url": "https://api.github.com/repos/n-musa/30-seconds-of-code",
                          "forks_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/forks",
                          "keys_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/keys{/key_id}",
                          "collaborators_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/collaborators{/collaborator}",
                          "teams_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/teams",
                          "hooks_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/hooks",
                          "issue_events_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/issues/events{/number}",
                          "events_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/events",
                          "assignees_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/assignees{/user}",
                          "branches_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/branches{/branch}",
                          "tags_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/tags",
                          "blobs_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/git/blobs{/sha}",
                          "git_tags_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/git/tags{/sha}",
                          "git_refs_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/git/refs{/sha}",
                          "trees_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/git/trees{/sha}",
                          "statuses_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/statuses/{sha}",
                          "languages_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/languages",
                          "stargazers_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/stargazers",
                          "contributors_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/contributors",
                          "subscribers_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/subscribers",
                          "subscription_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/subscription",
                          "commits_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/commits{/sha}",
                          "git_commits_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/git/commits{/sha}",
                          "comments_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/comments{/number}",
                          "issue_comment_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/issues/comments{/number}",
                          "contents_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/contents/{+path}",
                          "compare_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/compare/{base}...{head}",
                          "merges_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/merges",
                          "archive_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/{archive_format}{/ref}",
                          "downloads_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/downloads",
                          "issues_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/issues{/number}",
                          "pulls_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/pulls{/number}",
                          "milestones_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/milestones{/number}",
                          "notifications_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/notifications{?since,all,participating}",
                          "labels_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/labels{/name}",
                          "releases_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/releases{/id}",
                          "deployments_url": "https://api.github.com/repos/n-musa/30-seconds-of-code/deployments",
                          "created_at": "2020-12-16T16:04:12Z",
                          "updated_at": "2020-12-16T16:04:14Z",
                          "pushed_at": "2020-12-16T11:42:28Z",
                          "git_url": "git://github.com/n-musa/30-seconds-of-code.git",
                          "ssh_url": "git@github.com:n-musa/30-seconds-of-code.git",
                          "clone_url": "https://github.com/n-musa/30-seconds-of-code.git",
                          "svn_url": "https://github.com/n-musa/30-seconds-of-code",
                          "homepage": "https://www.30secondsofcode.org/js/p/1",
                          "size": 27777,
                          "stargazers_count": 0,
                          "watchers_count": 0,
                          "language": null,
                          "has_issues": false,
                          "has_projects": true,
                          "has_downloads": true,
                          "has_wiki": true,
                          "has_pages": false,
                          "has_discussions": false,
                          "forks_count": 0,
                          "mirror_url": null,
                          "archived": false,
                          "disabled": false,
                          "open_issues_count": 0,
                          "license": {
                            "key": "cc0-1.0",
                            "name": "Creative Commons Zero v1.0 Universal",
                            "spdx_id": "CC0-1.0",
                            "url": "https://api.github.com/licenses/cc0-1.0",
                            "node_id": "MDc6TGljZW5zZTY="
                          },
                          "allow_forking": true,
                          "is_template": false,
                          "web_commit_signoff_required": false,
                          "topics": [
                      
                          ],
                          "visibility": "public",
                          "forks": 0,
                          "open_issues": 0,
                          "watchers": 0,
                          "default_branch": "master"
                        }])
                });
            }
            else {
                request.continue();
            }
        });
        const input = await page.$('input[type="text"],input[type="search"]');
        const button = await page.$('button,input[type="submit"]');
        await input.type('n-musa');
        await button.click();
        await page.waitForNetworkIdle();
        //await page.screenshot({ path: 'submitPage.png' });
        const repoName = await page.content();
        expect(repoName).toMatch(/30-seconds-of-code/i);
    });
});