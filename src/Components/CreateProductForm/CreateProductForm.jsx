import React, { useEffect, useState } from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import categoriesService from '../../Services/category';
import Loading from '../Loading';
import { validateProduct, isValidURL } from '../../Utils/validate.product';
import productServices from '../../Services/products';
import './createProductForm.scss';

export default function CreateProductForm() {
	const [categories, setCategories] = useState([]);
	const [images, setImages] = useState([]);
	const [formErrors, setFormErrors] = useState({});
	let imageInput = null;

	useEffect(() => {
		async function getCategories() {
			setCategories(await categoriesService.getAllCategories());
		}
		getCategories();
	}, []);

	function clickHandler(img) {
		if (isValidURL(img)) {
			setImages([...images, img]);
			/* imageInput.value = ""; */
			console.log(images);
		} /* else {
      notifyError("invalid URL");
    } */
	}

	function deleteImage(img) {
		setImages(images.filter((image) => image !== img));
		console.log(images);
	}

	function imageInputHandler(e) {
		imageInput = e.target;
		console.log(imageInput);
	}

	return !categories.length ? (
		<Loading />
	) : (
		<Formik
			initialValues={{
				title: '',
				categories: '',
				image: '',
				description: '',
				price: '',
				stock: '',
				sales: 0,
				discount: 0,
			}}
			validate={(v) => {
				let err = {};
				err = validateProduct(v);
				setFormErrors(err);
				return err;
			}}
			onSubmit={(values, { resetForm }) => {
				values.price = Number(values.price);
				values.stock = Number(values.stock);
				values.sales = Number(values.sales);
				values.discount = Number(values.discount);
				if (Object.keys(formErrors).length <= 0) {
					values.image = images;
					productServices.createProduct(values);
					/* resetForm(); */
				}
			}}
		>
			{({ errors, values }) => (
				<Form>
					{console.log(errors)}
					<div className='create-product-form__container'>
						<section className='create-product-form__form-container'>
							<h1>Register a product</h1>
							<div>
								<label htmlFor='title'>Product Name</label>
								<Field
									className='form-container__field'
									name='title'
									id='title'
									type='text'
								/>
								<ErrorMessage
									name='title'
									component={() => (
										<p className='error-message'>{errors.title}</p>
									)}
								/>
							</div>
							<div>
								<label htmlFor='categories'>Categories</label>
								<Field
									className='form-container__field'
									name='categories'
									id='categories'
									type='text'
									as='select'
								>
									<option value='categories'>Categories</option>
									{categories.map((category, i) => (
										<option key={i} value={category.name}>
											{category.name}
										</option>
									))}
								</Field>
								<ErrorMessage
									className='error-message'
									name='categories'
									component={() => (
										<p className='error-message'>{errors.categories}</p>
									)}
								></ErrorMessage>
							</div>
							<div id='form-container__images-input'>
								<div>
									<label htmlFor='images'>Images</label>
									<Field
										className='form-container__field'
										name='images'
										id='images'
										type='text'
									/>
									<ErrorMessage
										className='error-message'
										name='images'
										component={() => (
											<p className='error-message'>{errors.images}</p>
										)}
									/>
								</div>
								<Button
									type='Button'
									className='Button'
									onClick={() => clickHandler(values.images)}
								>
									+ Add
								</Button>
							</div>
							{images.length ? (
								<div id='create-product-form__image-container'>
									{images.map((image, i) => (
										<img
											onClick={() => deleteImage(image)}
											className='create-product-form__product-image'
											key={i}
											src={image}
											alt={`productImage`}
										/>
									))}
								</div>
							) : null}
							<div>
								<label htmlFor='name'>Description</label>
								<Field
									className='form-container__field form-container__field-text-area'
									name='description'
									id='description'
									as='textarea'
								/>
								<ErrorMessage
									className='error-message'
									name='description'
									component={() => (
										<p className='error-message'>{errors.description}</p>
									)}
								/>
							</div>
							<div>
								<label htmlFor='name'>Price</label>
								<Field
									className='form-container__field'
									name='price'
									id='price'
									type='text'
								/>
								<ErrorMessage
									className='error-message'
									name='price'
									component={() => (
										<p className='error-message'>{errors.price}</p>
									)}
								/>
							</div>
							<div>
								<label htmlFor='name'>Stock</label>
								<Field
									className='form-container__field'
									name='stock'
									id='stock'
									type='text'
								/>
								<ErrorMessage
									className='error-message'
									name='stock'
									component={() => (
										<p className='error-message'>{errors.stock}</p>
									)}
								/>
							</div>
							<input className='submit-Button' value='Create' type='submit' />
						</section>
					</div>
				</Form>
			)}
		</Formik>
	);
}
