import React, {useState} from "react";
import {Form, FormControl, InputGroup} from "react-bootstrap";
import '../adminPageStyles.scss';

const newsTitle = [{title:"Title #1"}, {title: "Title #2"}, {title: "Title #3"}]

export default function NewsUploader({type}) {

    const [file, setFile] = useState('');
    const [news,setNews] = useState({title:'',body:''});

    const handleSubmit = (e) => {
        e.preventDefault();
        setFile('');
        setNews({title:'',body:''});
        console.log(`File ${file}, news.title ${news.title}, news.body ${news.body}`);
    }

    const handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setFile(file);
            console.log(file);
        };

       let obj = reader.readAsArrayBuffer(file);
       console.log(obj);
    }
    return (
        <div className="row m-2">
            {type === 'upload' ?
                <InputGroup className="my-3">
                    <FormControl
                        onChange={e => setNews({...news, title: e.target.value})}
                        placeholder="Назва"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={news.title}
                    />
                </InputGroup>
                :
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Виберіть новину по назві</Form.Label>
                    <Form.Control as="select"
                                  onChange={e => setNews({...news, title: e.target.value})}>
                        {newsTitle.map(item => <option>{item.title}</option>)}
                    </Form.Control>
                    </Form.Group>
                    }
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Текст новини</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            onChange={e => setNews(
                                {
                                    ...news,
                                    body: e.target.value
                                })}
                            as="textarea"
                            aria-label="With textarea"
                            value={news.body}
                        />
                    </InputGroup>
                    <form className="input-group w-100 mt-3"
                          action=""
                          onSubmit={e => handleSubmit(e)}>
                        <input
                            onChange={e => handleImageChange(e)}
                            className=""
                            type="file"/>
                        <button
                            onClick={e => handleSubmit(e)}
                            className="btn btn-outline-secondary my-2">
                            Завантажити
                        </button>
                    </form>
                </div>
            )
}
