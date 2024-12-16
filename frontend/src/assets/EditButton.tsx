import React from 'react';

interface EditButtonProps {
    onClick: () => void;
}

const EditButton: React.FC<EditButtonProps> = ({ onClick }) => (
    <button className="bg-yellow-500 text-white px-2 py-1 rounded m-1" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24">
            <path d="M14.06 9.02l-9.06 9.06v3.92h3.92l9.06-9.06-3.92-3.92zm3.02-3.02l-1.06 1.06 3.92 3.92 1.06-1.06-3.92-3.92zm-3.02 3.02l1.06-1.06 3.92 3.92-1.06 1.06-3.92-3.92zm-3.02 3.02l1.06-1.06 3.92 3.92-1.06 1.06-3.92-3.92zm-3.02 3.02l1.06-1.06 3.92 3.92-1.06 1.06-3.92-3.92zm-3.02 3.02l1.06-1.06 3.92 3.92-1.06 1.06-3.92-3.92z" />
        </svg>
    </button>
);

export default EditButton;