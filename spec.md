# NyayMitra

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- Section Simplifier: user inputs an IPC/BNS section number, backend returns a plain-language explanation
- What Should I Do Now: given a section, returns whether offence is bailable or non-bailable and recommended next steps
- Nearby Lawyer Finder: user enters city/area, backend returns a list of sample lawyers with name, specialization, and contact
- Landing/home page introducing NyayMitra with navigation to each tool
- Sample data for ~20 common IPC sections stored in backend
- Sample lawyer data for major Indian cities

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Backend: store IPC section data (number, title, plain-language explanation, bailable status, next steps) and lawyer data (name, city, specialization, phone)
2. Backend APIs: getSectionInfo(section: Text), getLawyersByCity(city: Text)
3. Frontend: 4-page app - Home, Section Simplifier, What Should I Do Now, Nearby Lawyer Finder
4. Navigation header with NyayMitra branding
5. Each tool page has a clean input form and result display
