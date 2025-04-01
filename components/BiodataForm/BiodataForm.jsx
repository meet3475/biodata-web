import React, { useState } from 'react';
import AddFieldModal from '../AddFieldModal/AddFieldModal';
import AddSectionModal from '../AddSectionModal/AddSectionModal';


const BiodataForm = () => {
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: '',
        timeOfBirth: '',
        placeOfBirth: '',
        complexion: '',
        height: '',
        gotraCaste: '',
        occupation: '',
        income: '',
        education: '',
        fatherName: '',
        fatherOccupation: '',
        motherName: '',
        motherOccupation: '',
        siblings: '',
        contactPerson: '',
        contactNumber: '',
        residentialAddress: ''
    });

    // State for profile image
    const [profileImage, setProfileImage] = useState(null);

    // Validation state
    const [errors, setErrors] = useState({});

    // Section visibility state
    const [sections, setSections] = useState({
        personal: true,
        family: true,
        contact: true,
    });

    // Field order state (to manage reordering)
    const [fieldOrder, setFieldOrder] = useState({
        personal: ['name', 'dateOfBirth', 'timeOfBirth', 'placeOfBirth', 'complexion', 'height', 'gotraCaste', 'occupation', 'income', 'education'],
        family: ['fatherName', 'fatherOccupation', 'motherName', 'motherOccupation', 'siblings'],
        contact: ['contactPerson', 'contactNumber', 'residentialAddress']
    });

    // Field labels mapping
    const [fieldLabels, setFieldLabels] = useState({
        name: 'Name',
        dateOfBirth: 'Date of Birth',
        timeOfBirth: 'Time of Birth',
        placeOfBirth: 'Place of Birth',
        complexion: 'Complexion',
        height: 'Height',
        gotraCaste: 'Gotra/Caste',
        occupation: 'Occupation',
        income: 'Income',
        education: 'Education',
        fatherName: 'Father\'s Name',
        fatherOccupation: 'Father\'s Occupation',
        motherName: 'Mother\'s Name',
        motherOccupation: 'Mother\'s Occupation',
        siblings: 'Brother / Sister',
        contactPerson: 'Contact Person',
        contactNumber: 'Contact Number',
        residentialAddress: 'Residential Address'
    });

    // Modal states
    const [showAddFieldModal, setShowAddFieldModal] = useState(false);
    const [showAddSectionModal, setShowAddSectionModal] = useState(false);
    const [currentSection, setCurrentSection] = useState('');
    const [newFieldName, setNewFieldName] = useState('');
    const [newFieldLabel, setNewFieldLabel] = useState('');
    const [newSectionName, setNewSectionName] = useState('');
    const [sectionFields, setSectionFields] = useState([]);


    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    // Handle profile image upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Move a field up in order
    const moveFieldUp = (section, index) => {
        if (index === 0) return; // Already at the top

        const newOrder = [...fieldOrder[section]];
        [newOrder[index], newOrder[index - 1]] = [newOrder[index - 1], newOrder[index]];
        setFieldOrder({
            ...fieldOrder,
            [section]: newOrder
        });
    };

    // Move a field down in order
    const moveFieldDown = (section, index) => {
        if (index === fieldOrder[section].length - 1) return; // Already at the bottom

        const newOrder = [...fieldOrder[section]];
        [newOrder[index], newOrder[index + 1]] = [newOrder[index + 1], newOrder[index]];
        setFieldOrder({
            ...fieldOrder,
            [section]: newOrder
        });
    };

    // Delete a field
    const deleteField = (section, fieldName) => {
        const newOrder = fieldOrder[section].filter(field => field !== fieldName);

        // Also remove from formData (optional)
        const newFormData = { ...formData };
        delete newFormData[fieldName];

        setFieldOrder({
            ...fieldOrder,
            [section]: newOrder
        });

        setFormData(newFormData);
    };

    // Open add field modal
    const addNewField = (section) => {
        setCurrentSection(section);
        setNewFieldName('');
        setNewFieldLabel('');
        setShowAddFieldModal(true);
    };

    // Handle add field form submission
    const handleAddField = () => {
        if (!newFieldName || !newFieldLabel) return;

        // Convert to camelCase for field name
        const fieldKey = newFieldName.toLowerCase().replace(/\s+(.)/g, (match, group) => group.toUpperCase());

        // Update field labels
        setFieldLabels({
            ...fieldLabels,
            [fieldKey]: newFieldLabel
        });

        // Update form data
        setFormData({
            ...formData,
            [fieldKey]: ''
        });

        // Update field order
        setFieldOrder({
            ...fieldOrder,
            [currentSection]: [...fieldOrder[currentSection], fieldKey]
        });

        setShowAddFieldModal(false);
    };

    // Open add section modal
    const addNewSection = () => {
        setNewSectionName('');
        setSectionFields([{ name: '', label: '' }]);
        setShowAddSectionModal(true);
    };

    // Add another field to the new section
    const addSectionField = () => {
        setSectionFields([...sectionFields, { name: '', label: '' }]);
    };

    // Update section field value
    const updateSectionField = (index, key, value) => {
        const updatedFields = [...sectionFields];
        updatedFields[index][key] = value;
        setSectionFields(updatedFields);
    };

    // Handle add section form submission
    const handleAddSection = () => {
        if (!newSectionName || sectionFields.some(field => !field.name || !field.label)) return;

        // Convert to camelCase for section name
        const sectionKey = newSectionName.toLowerCase().replace(/\s+(.)/g, (match, group) => group.toUpperCase());

        // Process fields
        const fieldKeys = [];
        const newLabels = { ...fieldLabels };
        const newFormDataFields = { ...formData };

        sectionFields.forEach(field => {
            // Convert to camelCase for field name
            const fieldKey = field.name.toLowerCase().replace(/\s+(.)/g, (match, group) => group.toUpperCase());
            fieldKeys.push(fieldKey);
            newLabels[fieldKey] = field.label;
            newFormDataFields[fieldKey] = '';
        });

        // Update states
        setFieldLabels(newLabels);
        setFormData(newFormDataFields);
        setFieldOrder({
            ...fieldOrder,
            [sectionKey]: fieldKeys
        });
        setSections({
            ...sections,
            [sectionKey]: true
        });

        setShowAddSectionModal(false);
    };


    // Validate form
    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.name?.trim()) {
            tempErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.dateOfBirth) {
            tempErrors.dateOfBirth = 'Date of Birth is required';
            isValid = false;
        }

        if (!formData.contactNumber && !/^[0-9]{10}$/.test(formData.contactNumber)) {
            tempErrors.contactNumber = 'Please enter a valid 10-digit phone number';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form data:', formData);
            alert('Form submitted successfully!');
        } else {
            console.log('Form validation failed');
        }
    };

    // Remove section
    const removeSection = (section) => {
        setSections({
            ...sections,
            [section]: false,
        });
    };

    // Reset form
    const resetForm = () => {
        if (window.confirm('Are you sure you want to reset the form?')) {
            setFormData({
                name: '',
                dateOfBirth: '',
                timeOfBirth: '',
                placeOfBirth: '',
                complexion: '',
                height: '',
                gotraCaste: '',
                occupation: '',
                income: '',
                education: '',
                fatherName: '',
                fatherOccupation: '',
                motherName: '',
                motherOccupation: '',
                siblings: '',
                contactPerson: '',
                contactNumber: '',
                residentialAddress: ''
            });
            setProfileImage(null);
            setErrors({});
        }
    };

    // Render a form field based on its type
    const renderField = (section, fieldName, index) => {
        let inputElement;

        switch (fieldName) {
            case 'dateOfBirth':
                inputElement = (
                    <input
                        type="date"
                        name={fieldName}
                        value={formData[fieldName]}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors[fieldName] ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
                    />
                );
                break;
            case 'timeOfBirth':
                inputElement = (
                    <input
                        type="time"
                        name={fieldName}
                        value={formData[fieldName]}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                );
                break;
            default:
                inputElement = (
                    <input
                        type="text"
                        name={fieldName}
                        value={formData[fieldName]}
                        onChange={handleChange}
                        placeholder={`Enter ${fieldLabels[fieldName]}`}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors[fieldName] ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
                    />
                );
        }

        return (
            <div key={fieldName} className="relative flex items-center mb-4">
                <div className="flex-grow">
                    <label className="block text-sm font-medium text-gray-700 mb-1">{fieldLabels[fieldName]}</label>
                    {inputElement}
                    {errors[fieldName] && <p className="text-red-500 text-xs mt-1">{errors[fieldName]}</p>}
                </div>
                <div className="flex flex-col ml-2">
                    <button
                        type="button"
                        className="mb-1 p-1 bg-gray-100 hover:bg-gray-200 rounded"
                        onClick={() => moveFieldUp(section, index)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        className="p-1 bg-gray-100 hover:bg-gray-200 rounded"
                        onClick={() => moveFieldDown(section, index)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
                <button
                    type="button"
                    className="ml-2 p-1 text-red-500 hover:bg-red-100 rounded"
                    onClick={() => deleteField(section, fieldName)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        );
    };

    // Render section
    const renderSection = (sectionKey) => {
        const sectionLabel = sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1);

        return (
            <div key={sectionKey} className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                        {sectionKey === 'personal' ? 'Personal Details' :
                            sectionKey === 'family' ? 'Family Details' :
                                sectionKey === 'contact' ? 'Contact Details' : sectionLabel}
                        <button
                            type="button"
                            className="ml-2 text-gray-500 hover:text-gray-700"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </button>
                    </h2>
                    <button
                        type="button"
                        onClick={() => removeSection(sectionKey)}
                        className="text-gray-500 hover:text-red-700"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>

                <div className="space-y-1">
                    {fieldOrder[sectionKey]?.map((fieldName, index) =>
                        renderField(sectionKey, fieldName, index)
                    )}
                </div>

                <div className="mt-4">
                    <button
                        type="button"
                        onClick={() => addNewField(sectionKey)}
                        className='py-2 px-4 flex items-center bg-[#9E2665] text-white text-base md:text-[14px] font-medium rounded-md hover:bg-[#4649C0]'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Add New Field
                    </button>
                </div>
            </div>
        );
    };


    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-[30px] sm:text-[45px] text-[#B92753] font-bold mb-3 bg-white rounded-lg shadow-2xl inline py-3 px-5">Create Your Biodata</h2>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <div className="flex justify-between mb-6">
                        <div className="relative w-32 h-32 bg-gray-100 rounded-full overflow-hidden border-2 border-gray-300">
                            {profileImage ? (
                                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <div className='flex items-center py-10 justify-evenly flex-col'>
                                    <p className='font-bold'>Upload Image</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-camera "><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
                                </div>

                            )}
                            <input
                                type="file"
                                id="profileImage"
                                accept="image/*"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                onChange={handleImageUpload}
                            />
                        </div>

                        <div className='relative w-32 h-32 bg-gray-100 rounded-2xl overflow-hidden border-2 border-gray-300' >

                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {/* Render all visible sections */}
                        {Object.keys(sections).map(section => (
                            sections[section] && renderSection(section)
                        ))}

                        {/* Form Buttons */}
                        <div className="flex justify-between mt-8">
                            <button
                                type="button"
                                onClick={addNewSection}
                                className='py-2 px-4 flex items-center bg-[#4649C0] text-white text-base md:text-[14px] font-medium rounded-md hover:bg-[#9E2665]'
                            >
                                + Add New Section
                            </button>
                            <div className='flex justify-between gap-12'>
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className='py-2 px-4 flex items-center bg-[#4649C0] text-white text-base md:text-[14px] font-medium rounded-md hover:bg-[#9E2665]'
                                >
                                    Reset Form
                                </button>

                                <button
                                    type="submit"
                                    className='py-2 px-4 flex items-center bg-[#4649C0] text-white text-base md:text-[14px] font-medium rounded-md hover:bg-[#9E2665]'
                                >
                                    Generate Biodata
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Add Field Modal */}
            <AddFieldModal
                show={showAddFieldModal}
                onClose={() => setShowAddFieldModal(false)}
                onAdd={handleAddField}
                newFieldName={newFieldName}
                setNewFieldName={setNewFieldName}
                newFieldLabel={newFieldLabel}
                setNewFieldLabel={setNewFieldLabel}
            />

            {/* Add Section Modal */}
            <AddSectionModal
                show={showAddSectionModal}
                onClose={() => setShowAddSectionModal(false)}
                onAdd={handleAddSection}
                newSectionName={newSectionName}
                setNewSectionName={setNewSectionName}
                sectionFields={sectionFields}
                setSectionFields={setSectionFields}
                addSectionField={addSectionField}
                updateSectionField={updateSectionField}
            />
        </div>
    );
};

export default BiodataForm;