# Jacques | Interactive Personal Website

Personal portfolio website for ICT251 Web Technologies (Activity 3), Mulungushi University. It improves my Activity 2 website with JavaScript and is published as a static site on Render through GitHub.

## What the website contains

- About Me, My Hobbies, My Learning Plan (with a table), Projects and Skills, My Photos, My Media (video and audio) and Contact sections
- An introduction area with a "View My Projects" button
- A layout that works on phones and computers

## JavaScript features (js/script.js)

1. **Contact form validation and preview (compulsory):** checks the name, email and message. Empty or spaces-only names and messages and wrongly formatted emails are rejected with a message under the field. When the data is valid, a preview appears on the page without reloading. It says the data was validated and that no message was sent.
2. **Theme switch:** the Dark mode / Light mode button in the navigation changes the appearance of the whole page and remembers the choice.
3. **Gallery viewer:** the Previous and Next buttons change the photo and its caption. Previous is disabled on the first photo and Next is disabled on the last photo.
4. **Expandable project details:** the Show details / Hide details buttons open and close the details of each project.

## How to test the features

1. **Form:** go to Contact and click "Check my message" with empty fields, then with spaces only and an email like `abc`. Errors should appear. Then enter a real name, an email like `name@example.com` and a message. A preview should appear.
2. **Theme switch:** click the Dark mode button in the navigation and click it again to go back.
3. **Gallery viewer:** go to My Photos and click Next until Photo 3 of 3. Next should be disabled. Click Previous until Photo 1 of 3. Previous should be disabled.
4. **Expandable details:** go to Projects and Skills and click Show details on each project, then click Hide details.

## Sources used

- MDN Web Docs, Learn web development: https://developer.mozilla.org/en-US/docs/Learn_web_development
- My own photos, video and audio recordings
- Lecture notes and the Activity 3 brief from ICT251 Web Technologies

## Author

Jacques Kabunda, Computer Science, Mulungushi University