export default {
  logDropdownValues: () => {
    console.log("School:", SchoolDropdown.selectedOptionValue);
    console.log("Class:", ClassDropdown.selectedOptionValue);
    console.log("Section:", SectionDropdown.selectedOptionValue);
  }
}