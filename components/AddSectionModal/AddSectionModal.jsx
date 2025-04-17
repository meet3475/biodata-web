'use client';
import React from 'react'

const AddSectionModal = ({
    show,
    onClose,
    onAdd,
    newSectionName,
    setNewSectionName,
    sectionFields,
    addSectionField,
    updateSectionField,
    currentLanguage,
    translations
}) => { 
    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd();
    };

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-md w-full">
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-between items-center border-b px-6 py-4">
                        <h3 className="text-lg font-medium">
                            {translations[currentLanguage]?.addNewSection || 'Add New Section'}
                        </h3>
                        <button 
                            type="button" 
                            onClick={onClose} 
                            className="text-gray-400 hover:text-gray-500"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="px-6 py-4">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    {translations[currentLanguage]?.sectionName || 'Section Name'}
                                </label>
                                <input
                                    type="text"
                                    placeholder={translations[currentLanguage]?.enterSectionName || 'Enter section name (e.g. Education Details)'}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                                    value={newSectionName}
                                    onChange={(e) => setNewSectionName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    {translations[currentLanguage]?.sectionFields || 'Section Fields'}
                                </label>
                                {sectionFields.map((field, index) => (
                                    <div key={index} className="mb-2">
                                        <input
                                            type="text"
                                            placeholder={translations[currentLanguage]?.fieldLabel || 'Field label'}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                                            value={field.label}
                                            onChange={(e) => updateSectionField(index, 'label', e.target.value)}
                                            required
                                        />
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    className="mt-2 py-1 px-3 border border-gray-300 rounded-md hover:bg-gray-100 text-sm"
                                    onClick={addSectionField}
                                >
                                    + {translations[currentLanguage]?.addField || 'Add Field'}
                                </button>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="mr-2 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-100"
                                    onClick={onClose}
                                >
                                    {translations[currentLanguage]?.cancel || 'Cancel'}
                                </button>
                                <button
                                    type="submit"
                                    className="py-2 px-4 bg-[#4649C0] text-white rounded-md hover:bg-[#9E2665]"
                                >
                                    {translations[currentLanguage]?.addSection || 'Add Section'}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddSectionModal