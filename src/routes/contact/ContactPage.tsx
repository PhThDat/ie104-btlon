import React, { ChangeEvent, useState } from "react";
import { BaseProps, BasePropsPage } from "../../submodules/base-props/base-props";
import PageLayout from "../../components/layout/PageLayout";
import { combineClassNames } from "../../submodules/string-processing/combine-classname";
import useThemeColor from "../../hooks/useThemeColor";
import { THEMES, ThemeKey } from "../../settings";
import LocalStorage from "../../submodules/local-storage/local-storage";

interface Props extends BasePropsPage {}

const ContactPage: React.FC<Props> = React.memo((props) => {
    const [_name, setName] = useState({
        firstName: "",
        lastName: ""
    });
    const [contact, setContact] = useState({
        phone: "",
        email: ""
    });
    const [comment, setComment] = useState("");
    const [checkBoxTicked, setCheckBoxTicked] = useState(false);

    useThemeColor();

    const handleChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
        setName({
            firstName: e.target.value,
            lastName: _name.lastName
        });
    };
    const handleChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
        setName({
            lastName: e.target.value,
            firstName: _name.firstName
        });
    };
    const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
        setContact({
            phone: e.target.value,
            email: contact.email
        })
    };
    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setContact({
            phone: contact.phone,
            email: e.target.value
        });
    };
    const handleChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value);
    }
    const handleClickCheckbox = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        setCheckBoxTicked(!checkBoxTicked);
    }

    const handleClickSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        alert("Thank you for your submission");
        setName({
            firstName: "",
            lastName: ""
        });
        setContact({
            email: "",
            phone: ""
        });
        setComment("");
        setCheckBoxTicked(false);
    };

    return (
        <PageLayout
            {...props}
            title="Contact us"
        >
            <p><b>Thank you for your interest. Please send us comments using the form below:</b></p>
            <form
                className="w-full text-sm"
            >
                <Label label="FirstName">
                    <Input 
                        value={_name.firstName}
                        type="text" 
                        onChange={handleChangeFirstName}
                    />
                </Label>
                <Label label="LastName">
                    <Input 
                        value={_name.lastName}
                        type="text" 
                        onChange={handleChangeLastName}
                    />
                </Label>
                <Label label="Phone">
                    <Input
                        value={contact.phone} 
                        type="tel"
                        onChange={handleChangePhone} 
                    />
                </Label>
                <Label label="Email">
                    <Input 
                        value={contact.email}
                        type="email" 
                        onChange={handleChangeEmail}
                    />
                </Label>
                <Label label="Comments">
                    <textarea 
                        value={comment}
                        onChange={handleChangeComment}
                        className="w-full border border-dashed border-black"
                        rows={4}
                    />
                </Label>
                <Label>
                    <input 
                        checked={checkBoxTicked}
                        onClick={handleClickCheckbox}
                        type="checkbox" 
                    /> Send me your monthly newsletter
                </Label>
                <Label>
                    <button
                        className="p-1 text-[#cca45c] border-2"
                        style={{
                            borderStyle: "outset",
                            backgroundColor: THEMES[LocalStorage.get("theme") as ThemeKey].toString()
                        }}
                        onClick={handleClickSubmit}
                    >
                        Submit
                    </button>
                </Label>
            </form>
        </PageLayout>
    );
});

export default ContactPage;

interface LabelProps extends BaseProps {
    label?: string
};

const Label = React.memo((props: LabelProps) => {
    return (
        <label
            className={combineClassNames(
                "flex m-2",
                props.className
            )}
            style={{...props.style}}
        >
            <span className="h-full w-20 min-[850px]:w-32 flex items-center">{props.label}</span>
            <div className="grow">
                {props.children}
            </div>
        </label>
    )
});

interface InputProps extends BaseProps {
    type?: string
    value?: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = React.memo((props: InputProps) => {
    return (
        <input 
            {...props}
            className={combineClassNames(
                props.className,
                "w-48 max-[850px]:max-w-[140px] border border-dashed border-black"
            )}
        />
    )
});