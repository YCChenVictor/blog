import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import FileSaver from "file-saver"

function Gpt() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [createRequest, setCreateRequest] = useState('Please help create an article about topic:')
  const [previewArticle, setPreviewArticle] = useState('')

  useEffect(() => {
    const token = localStorage['blog logged in']
    fetch("http://localhost:5000/gpt-init", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
    .then((response) => response.json())
    .then((data) => {
      setLoggedIn(data['loggedIn'])
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }, [])

  const handleInputChange = (e) => {
    setCreateRequest(e.target.value)
  }

  const createArticle = async () => {
    const token = localStorage['blog logged in']
    try {
      const response = await axios.post(
        'http://localhost:5000/create-article',
        {
          prompt: createRequest,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      setPreviewArticle(response.data.message.content)
    } catch(error) {
      console.log(error)
    }
  }

  const storeArticle = () => {
    // Currently can only store file to download and move it to target article
    const article = new Blob([previewArticle], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(article, "hello world.txt");
  }

  return (
    <div className="px-4" id="gpt">
      {loggedIn ? (
        <button
          className="text-white transition"
          onClick={setModalOpen}
        >
          GPT
        </button>
      ) : (
        null
      )}
      <Modal
        isOpen={Boolean(modalOpen)}
        onRequestClose={() => setModalOpen(false)}
        className="p-4"
        appElement={document.getElementById('root')}
      >
        <div className="modal-content">
          <h3>Create an article</h3>
          <textarea
            value={createRequest}
            onChange={(e) => handleInputChange(e)}
            rows={4}
            cols={50}
          />
      
          <div className="flex mt-4">
            <button
              className="mr-2 text-white bg-gray-500 px-4 py-2 rounded hover:bg-gray-700 transition"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
            <button
              className="text-white bg-gray-500 px-4 py-2 rounded hover:bg-gray-700 transition"
              onClick={() => createArticle()}
            >
              Send
            </button>
          </div>
        </div>

        <div className="modal-content">
          <h3>Preview</h3>
          <button
            className="text-white bg-gray-500 px-4 py-2 rounded hover:bg-gray-700 transition"
            onClick={() => storeArticle()}
          >
            Store
          </button>
          <ReactMarkdown>
            {previewArticle}
          </ReactMarkdown>
        </div>
      </Modal>
    </div>
  );
}

export default Gpt;