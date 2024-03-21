# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

1. Support user registration function, login, forgot password is required
2. Check role for admin, user (response from BE)
3. Use Token Based Authentication with access token, and refresh token.
4. Use MUI or Ant Library for UI Components
5. Once logged in, if the role is only "user", the first page displays the Play Screen.
   If the role is admin or both, the first page displays the Admin screen.
6. At the Admin Screen, the admin can select 2 options: go to Play Screen or go to Management screens

NOTE: Be careful with the permissions. A normal user cannot access to admin's Screen and admin's routes. And please auto-refresh the token when the access token has expired.

**************\*\*\***************Play Screen**************\*\*\***************

1. Play Screen: Users can select the number of questions, that they want to play
2. Click "Save and next" to save the results and go to the next question, back to return to the previous
   question (Optional: Support skip question).
3. Questions can choose at least 1 answer.
4. Please create a layout that helps the players know where the question they are playing
5. Show a list of selected questions and answers along with the correct answer and total score
   after completing the survey.

**************\*\*\***************Management screens**************\*\*\***************

1. Question management screen must have:
   1.1. One table displays a list of questions
   Every row must have at least some fields: - Sequence number (not to be confused with id) - Title of question - Created day - Thumbnail (if you have)
   1.2. A button, then click this button, the admin can add a new question and its answers
   FE developer can custom behavior for this button (options in 1.2.1)
   1.2.1. Open a new Modal to add a new question, or go to a new screen to add (but make sure the modal or screen is pretty)
   1.2.2. When creating/updating a question (in screen/modal 1.2.1), the admin can upload a thumbnail for the question
2. When clicking on a specific question in table (1.1), the admin can view detailed questions and their answer
3. At (2), the admin can edit or delete the specific question and their answers
4. Account management screen: Similar 1,2,3 requirements
5. Please implement search, filter, and pagination functions on UI (API supports those)

**************\*\*\***************Login screen**************\*\*\***************

1. Has input boxes for email, password
2. The user can go to the Register screen from here
3. The user can forget the password and go to Forgot password screen from here

**************\*\*\***************Register screen**************\*\***************

1. Has input boxes for email, password, name

**************\*\*\***************Forgot password screen**************\*\***************

1. Has an input box for email

**************\*\*\***************Profile screen (Optional)**************\*\***************

1. In this screen, users can view their profile
2. He/she can view his/her base information
3. The user can change the password, and avatar on this screen

**************\*\*\***************Coding**************\*\***************
1, Please write clean code, and build a well-read project structure.
2, The components should be reusable.
3, Optimize performance if possible (remember not to overdo it)
