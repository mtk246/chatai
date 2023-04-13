import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import SpinnerComponent from "./utils/Spinner";
import ResponseComponent from "./ResponseComponent";

export default function RequestComponent() {
    const { t, lang } = useTranslation('common');

    const [requestText, setRequestText] = useState('');
    const [isLessThanTen, setIsLessThanTen] = useState(true);
    const [alertText, setAlertText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function onInputChange(e) {
        setRequestText(e.target.value);
    }

    function isEmptyString() {
        return requestText.length <= process.env.REQUEST_TEXT_LENGTH
            ? setIsLessThanTen(true)
            : setIsLessThanTen(false);
    }

    async function onSubmit(e) {
        e.preventDefault();

        setIsLoading(true);

        await isEmptyString();

        isLessThanTen
            ? (
                setAlertText('less than 20')
            )
            : null;

        setIsLoading(false);
    }

    function clearTextArea() {
        setRequestText('');
    }

    return (
        <div id="request-component">
            <div className="container-fluid d-flex justify-content-center">
                <h1> {t('text-introduction')} </h1>
            </div>
            <div className="w-100">
                <textarea
                    className="form-control my-2"
                    id="requestTextArea"
                    rows={process.env.REQUEST_INPUT_PLACEHOLDER_ROW_NUM || 5}
                    placeholder={t('placeholder-try-something')}
                    onChange={onInputChange}
                    value={requestText}
                ></textarea>
                <div className="row">
                    <div className="col">
                        <input
                            type="submit"
                            className="btn btn-primary w-100"
                            onClick={onSubmit}
                            value={t('text-submit')}
                        />
                    </div>
                    <div className="col">
                        <button
                            className="btn btn-danger w-100"
                            onClick={clearTextArea}
                        >
                            {t('text-clear')}
                        </button>
                    </div>
                </div>
                {
                    isLessThanTen
                        ? <small className="text-danger">{alertText}</small>
                        : (
                            <div className='my-4'>
                                {
                                    isLoading
                                        ? <SpinnerComponent />
                                        : <ResponseComponent requestText={requestText} />
                                }
                            </div>
                        )
                }
            </div>
        </div>
    )
}