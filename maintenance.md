## Regular Maintenance Tasks
1. **Check all links monthly** - Verify internal and external links still work. Fix or remove broken links.

2. **Update content quarterly** - Review all text for accuracy, update outdated information.

3. **Test in new browser versions monthly** - As browsers update, test site still works correctly.

4. **Check image loading monthly** - Verify all images still display, check load times.

5. **Backup site files monthly** - Keep copies of all files in case of problems.

## Updating Content
### Adding new content
1. Open pageNvidia.html in editor
2. Copy the HTML structure of an existing info card (article)
3. Update image src, generation name and paragraph
4. Add corresponding image to images folder
5. Update contents of info card (article)
6. Test that layout still works
7. Commit changes to Git
8. Push to GitHub (automatically updates live site)

## Updating existing content:
1. Open the relevant HTML file
2. Find the section to update using Find feature
3. Change the text/information for info card
4. If updating image, replace file in images folder with same name
5. Test page displays correctly
6. Commit and push changes

## Technical Maintenance
### If a page breaks:
1. Check browser console for errors (F12 in most browsers)
2. Validate HTML/CSS to find syntax errors
3. Check if recent change caused it - revert if needed using Git
4. Test in different browser to see if it's browser-specific
5. Check that all file paths are correct
6. Search error message if you get one
7. Compare with last working version to see what changed

### If you wanted to change the colors:
1. Update color variables/values in styles.css
2. Test on all pages to ensure sufficient contrast
3. Check text is still readable on new backgrounds
4. Test hover effects still visible
5. Commit change

## Tools and Resources
- Text editor (VS Code) to edit files
- Git for version control
- GitHub account for hosting
- Web browser with developer tools for testing
- W3C validators for checking code
- Image editor if updating photos
- MDN Web Docs for HTML/CSS reference
- Wikipedia for data

## Common Problems and Solutions
### Problem 1:

**Problem:** New image doesn't display

**Possible causes:** Wrong file path, file name typo, image not uploaded

**Solution:** Check file path matches folder structure, verify spelling matches exactly (case-sensitive), confirm file is in repository

### Problem 2:

**Problem:** Card button doesn't work (not opening dialog)

**Possible causes:** Forgot to add class or mispelled class name

**Solution:** Check the structure of other cards and copy it

## Version Control - Using Git for maintenance
Before making changes:
1. Pull latest version from GitHub
2. Make changes to local copy
3. Test changes locally
4. Commit with clear message describing change
5. Push to GitHub
6. Check live site updated correctly

If something breaks:
1. Use Git log to find last working version
2. Revert to that commit
3. Identify what caused problem
4. Fix properly and commit again

Make sure to have a good commit message!

Bad commit message: 'Updates', 'Fixed stuff', 'Changes'

Good commit messages are specific and explain WHAT changed.

## Future Enhancements
- add date to news cards (when that event happened)
- change primary colors to another color
- use image for logo instead of text
- add unique images as background for each card
- add search functionality to filter generatins names
- change CSS Grid to Flex for body layout

## Recommended maintenance schedule and tasks
I recommend to update the news page at least one every two weeks. If there are no interesting or relevant news please update the website as soon as a related or relevant story appears.

### After major browser updates:
- Test site still works correctly
- Verify all images still display

### After adding content:
- Verify internal and external links still work
- Verify images display

## Final Thoughts
Maintaining a website takes a lot of time especially if you don't use a website builder. A lot of instructions need to be provided in order to make it easier for the person that is maintaining the website to update it and maintain it.