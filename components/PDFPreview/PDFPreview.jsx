import React from 'react';

const PDFPreview = ({ formData, profileImage, selectedTemplate, fieldLabels, fieldOrder, sections, translations, currentLanguage }) => {
  const formatTimeWithAmPm = (timeString) => {
    if (!timeString) return '-';

    const [hours, minutes] = timeString.split(':');
    const hourNum = parseInt(hours, 10);
    const period = hourNum >= 12 ? 'PM' : 'AM';
    const hour12 = hourNum % 12 || 12;

    return `${hour12}:${minutes} ${period}`;
  };

  // Get appropriate font family based on language
  const getFontFamily = () => {
    switch (currentLanguage) {
      case 'हिंदी':
      case 'मराठी':
        return "'Noto Sans Devanagari', sans-serif";
      case 'ગુજરાતી':
        return "'Noto Sans Gujarati', sans-serif";
      case 'தமிழ்':
        return "'Noto Sans Tamil', sans-serif";
      case 'বাংলা':
        return "'Noto Sans Bengali', sans-serif";
      default:
        return "'Noto Sans', sans-serif";
    }
  };

  return (
    <div 
      className="relative bg-white w-full h-full overflow-hidden"
      style={{
        aspectRatio: '1/1.414',
        fontFamily: getFontFamily()
      }}
    >
      {/* Template background */}
      {selectedTemplate && (
        <div className="absolute inset-0 w-full h-full">
          <img
            src={selectedTemplate}
            alt="Template background"
            className="w-full h-full object-fill opacity-80"
          />
        </div>
      )}

      {/* Content with proper margins to match PDF */}
      <div className="relative z-10 p-6 h-full overflow-y-auto">
        {/* Header with profile image */}
        <div className="flex items-center mb-6">
          {profileImage && (
            <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-[#9E2665] mr-4 flex-shrink-0">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover" 
              />
            </div>
          )}
          <div>
            <h1 
              className="text-xl font-bold text-[#4649C0]"
              style={{ fontFamily: getFontFamily() }}
            >
              {formData.name || translations[currentLanguage].name}
            </h1>
            <p 
              className="text-gray-600 text-sm"
              style={{ fontFamily: getFontFamily() }}
            >
              Biodata
            </p>
          </div>
        </div>

        {/* Render all sections */}
        {Object.keys(sections).map(section => (
          sections[section] && (
            <div key={section} className="mb-4">
              <h3 
                className="text-base font-bold text-[#9E2665] border-b-2 border-[#9E2665] pb-1 mb-2"
                style={{ fontFamily: getFontFamily() }}
              >
                {translations[currentLanguage][`${section}Details`] ||
                  (section === 'personal' ? translations[currentLanguage].personalDetails :
                    section === 'family' ? translations[currentLanguage].familyDetails :
                      section === 'contact' ? translations[currentLanguage].contactDetails :
                        section.charAt(0).toUpperCase() + section.slice(1))}
              </h3>

              <div className="w-full">
                {fieldOrder[section]?.map((fieldName) => (
                  <div key={fieldName} className="flex mb-1 text-sm">
                    <div 
                      className="w-2/5 font-medium pr-2"
                      style={{ fontFamily: getFontFamily() }}
                    >
                      {translations[currentLanguage][fieldName] || fieldLabels[fieldName]} :-
                    </div>
                    <div 
                      className="w-3/5"
                      style={{ fontFamily: getFontFamily() }}
                    >
                      {fieldName === 'timeOfBirth'
                        ? formatTimeWithAmPm(formData[fieldName])
                        : formData[fieldName] || '-'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default PDFPreview;