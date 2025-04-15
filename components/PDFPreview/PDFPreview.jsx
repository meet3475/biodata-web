import React from 'react';

const PDFPreview = ({ formData, profileImage, selectedTemplate, fieldLabels, fieldOrder, sections, translations, currentLanguage }) => {
  return (
    <div className="relative bg-white w-full" style={{ aspectRatio: '1/1.414', maxHeight: '80vh' }}>
      {/* Template background */}
      {selectedTemplate && (
        <div className="absolute inset-0 w-full h-full">
          <img
            src={selectedTemplate}
            alt="Template background"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      )}

      {/* Content with proper margins to match PDF */}
      <div className="relative z-10 p-8 h-full overflow-y-auto">
        {/* Header with profile image */}
        <div className="flex items-center mb-8">
          {profileImage && (
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#9E2665] mr-4 flex-shrink-0">
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            </div>
          )}
          <div>
            <h1 className="text-2xl font-bold text-[#4649C0]">{formData.name || translations[currentLanguage].name}</h1>
            <p className="text-gray-600">Biodata</p>
          </div>
        </div>

        {/* Render all sections */}
        {Object.keys(sections).map(section => (
          sections[section] && (
            <div key={section} className="mb-6">
              <h3 className="text-lg font-bold text-[#9E2665] border-b-2 border-[#9E2665] pb-1 mb-3">
                {translations[currentLanguage][`${section}Details`] ||
                  (section === 'personal' ? translations[currentLanguage].personalDetails :
                  section === 'family' ? translations[currentLanguage].familyDetails :
                  section === 'contact' ? translations[currentLanguage].contactDetails :
                  section.charAt(0).toUpperCase() + section.slice(1))}
              </h3>

              <div className="w-full">
                {fieldOrder[section]?.map((fieldName) => (
                  <div key={fieldName} className="flex mb-2">
                    <div className="w-2/5 font-medium pr-2">
                      {translations[currentLanguage][fieldName] || fieldLabels[fieldName]}:
                    </div>
                    <div className="w-3/5">{formData[fieldName] || '-'}</div>
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