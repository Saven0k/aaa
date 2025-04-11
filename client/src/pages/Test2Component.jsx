import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './iindex.css'
import { addPost } from '../services/workWithBd';

const AdminPage2 = () => {

    const [typeVisible, setTypeVisible] = useState(''); //UseState for type of visible
    const [courseStudent, setCourseStudent] = useState(null); //UseState for couse of student
    const [title, setTitle] = useState(''); // UseState for Posts title
    const [content, setContent] = useState(''); // UseState for Posts content
    const [publicPost, setPublicPost] = useState(false); // UseState for visible content
    const [styles, setStyles] = useState({
        color: '#000000',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'normal',
    }); // UseState for contents styles

    const editorRef = useRef(null); // UseRef for edit content
    const lastSelectionRef = useRef(null); // Сохраняем последнюю позицию курсора
    const [image, setImage] = useState(null); // Для хранения файла изображения
    const [imagePreview, setImagePreview] = useState(''); // Для превью изображения

    // Сохраняем выделение (курсор)
    const saveSelection = () => {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            lastSelectionRef.current = selection.getRangeAt(0);
        }
    };

    // Восстанавливаем выделение (курсор)
    const restoreSelection = () => {
        if (lastSelectionRef.current) {
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(lastSelectionRef.current);
        }
    };

    // Применить стиль к выделенному тексту
    const applyStyleToSelection = () => {
        const selection = window.getSelection();
        if (!selection.rangeCount) return;

        const range = selection.getRangeAt(0);
        const selectedText = range.toString();
        if (!selectedText) {
            setStyles({ ...styles, color: '#000', fontSize: '14px', fontWeight: 'normal', fontStyle: 'normal' })
            return
        };

        const span = document.createElement('span');
        span.style.color = styles.color;
        span.style.fontSize = styles.fontSize;
        span.style.fontWeight = styles.fontWeight;
        span.style.fontStyle = styles.fontStyle;
        span.textContent = selectedText;

        range.deleteContents();
        range.insertNode(span);

        // Обновляем состояние content
        if (editorRef.current) {
            setContent(editorRef.current.innerHTML);
        }
        restoreSelection(); // Восстанавливаем курсор

    };

    // Обработчик загрузки изображения
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setImage(file);
        setImagePreview(URL.createObjectURL(file)); // Превью изображения
    };

    // Автоматически применяем стили при их изменении
    useEffect(() => {
        applyStyleToSelection();
    }, [styles.color, styles.fontSize, styles.fontWeight, styles.fontStyle]);

    // Сохраняем пост на сервер
    const savePost = () => {
        addPost(title, content, typeVisible, publicPost, courseStudent)
        setTitle('');
        setContent('');
        setImage(null);
        setImagePreview('');
    };

    return (
        <div className='addPost_component'>
            <div className='photo_input'>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                {imagePreview && (
                    <div>
                        <img src={imagePreview} alt="Preview" style={{ maxWidth: '200px' }} />
                    </div>
                )}
            </div>
            <input
                type="text"
                placeholder="Заголовок поста"
                value={title}
                className='title_input'
                onChange={(e) => setTitle(e.target.value)}
            />
            <div
                ref={editorRef}
                contentEditable
                onBlur={saveSelection} // Сохраняем позицию при потере фокуса
                onMouseUp={saveSelection} // Сохраняем позицию при выделении мышью
                onKeyUp={saveSelection} // Сохраняем позицию при вводе с клавиатуры
                dangerouslySetInnerHTML={{ __html: content }}
                className='content_input'
            />
            <div className='style_component'>
                <h3>Стили:</h3>
                <div className='styles_buttons'>
                    <input
                        type="color"
                        value={styles.color}
                        onChange={(e) => setStyles({ ...styles, color: e.target.value })}
                    />
                    <select
                        value={styles.fontSize}
                        onChange={(e) => setStyles({ ...styles, fontSize: e.target.value })}
                    >
                        <option value="12px">12px</option>
                        <option value="16px">16px</option>
                        <option value="20px">20px</option>
                    </select>
                    <button
                        className='bold_button'
                        onClick={() =>
                            setStyles({
                                ...styles,
                                fontWeight: styles.fontWeight === 'bold' ? 'normal' : 'bold',
                            })
                        }
                    >
                        Ж
                    </button>
                    <button
                        onClick={() =>
                            setStyles({
                                ...styles,
                                fontStyle: styles.fontStyle === 'italic' ? 'normal' : 'italic',
                            })
                        }
                    >
                        К
                    </button>
                </div>
            </div>
            <div className='selection_component'>
                <select
                    className='visible_select'
                    value={typeVisible}
                    onChange={(e) => setTypeVisible(e.target.value)}
                >

                    <option value="none">Не выбрано</option>
                    <option value="student">Студентам</option>
                    <option value="teacher">Учителям</option>
                </select>
                <select
                    className='course_select'
                    value={courseStudent}
                    onChange={(e) => setCourseStudent(e.target.value)}
                >
                    <option value="none">Не выбрано</option>
                    <option value="1">1 курс</option>
                    <option value="2">2 курс</option>
                    <option value="3">3 курс</option>
                    <option value="4">4 курс</option>
                </select>
            </div>
            <div className="publicPost">
                <img src={publicPost ? "./img/visible.svg" : "./img/unvisible.png"} alt="visible" className={publicPost ? 'visible-img' : "unvisible-img"} onClick={setPublicPost(!publicPost)} />
            </div>
            <button className='button_save_post' onClick={savePost}>Сохранить пост</button>
        </div>
    );
};

export default AdminPage2;