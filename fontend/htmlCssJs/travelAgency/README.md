# Website with Video Background and Responsive Navigation Sidebar
This is a website with video background, where a video is played automatically. When the screen becomes smaller, the navigation links will be hidden, and the menu icon will be displayed, when we can toggle it to get a sidebar with the navigation links. 

###  My Thoughts on Toggling Navigation Sidebars
When the screen is very big, we can hide the mobile navigation elements. With the help of a menu icon, we can toggle a sidebar that contains the navigation links that are normally displayed on larger screens.

---

###  Logic Behind It

####  In the CSS Stylesheet
* **Large Screens:** When the screen is big enough to display the navigation links at the top of the page:
    * Set the menu icon and sidebar to invisible: `display: none`
* **Small Screens:** When the screen is too small for the standard navigation:
    * Set the horizontal navigation links to invisible: `display: none`
    * Make the section with the menu icon visible: `display: block`
* **State Classes:**
    * **Hidden Class:** Add a `.hidden` class to the menu icon section (in the media query part): `display: none`
    * **Active Class:** Add an `.active` class to the sidebar part: `display: block`

####  In the JavaScript File
1. **Selection:** Use DOM `querySelector` to create query objects for the sidebar, menu section, menu icon, and close icon.
2. **Event Listeners:** Add an `EventListener` to the menu icon/section and the close button inside the sidebar.
3. **Opening Logic:** When we click the menu icon/section, we add the sidebar `.active` class to show the sidebar. Also, the `.hidden` class is added to the menu section.
4. **Closing Logic:** When we click the close button inside the sidebar, we remove the `.active` class from the sidebar. Meanwhile, the `.hidden` class is removed from the menu section.

> **Note:** In the JavaScript part, we can also simply use the `toggle` function for the menu and sidebar sections to get the toggling effect more easily.
> **Mistake** I made: tried to control the display style with the media to achieve the toggling effect the sidebar and the menu icon in the javascrip, which was failed, when the screen is becoming larger the menu icon didn't not disappear. The reason behind it is that when we apply inline styles directly to the HTML elements, the inline styles are "stronger" than css media queries. So, if we toggle the sidebar on a small screen and then expand the window, the inline style display: inline-block remains stuck on the element, overriding the css.  
---