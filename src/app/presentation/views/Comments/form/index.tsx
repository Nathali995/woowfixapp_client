import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from './style';
import { MyThemme } from 'src/styles/_variables'
import ActionButton from 'src/app/presentation/components/ActionButton';
import * as yup from 'yup';
import { useFormik } from 'formik';
import CommentInfo from 'src/app/domain/entity/Comment/structure/CommentInfo';
import CommentFormPresenter from './CommentFormPresenter';
import { StarEmpty, StarFull } from 'src/assets/svg';


export default function CommentsForm() {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const route = useRoute()
    const presenter: CommentFormPresenter = new CommentFormPresenter();
    const arrayStar = [1, 2, 3, 4, 5];
    const maxChars = 300;

    const formik = useFormik({
        initialValues: {
            rating: 0,
            comment: '',
        },
        validationSchema: yup.object().shape({
            rating: yup.number()
                .min(1)
                .required('La calificación por estrellas es requerida'),
            comment: yup.string()
                .min(0)
                .max(300),
        }),
        onSubmit: async formData => {
            const commentInfo: CommentInfo = {
                rating: formData.rating,
                comment: formData.comment,
            }
            await presenter.submitCommentForm(commentInfo)
                .then(response => {
                    if (response) {
                        console.log('Reseña añadida =>', 'Mecánica: ', route.params?.id, ', Calificación: ', formData.rating, ', Comentario: ', formData.comment)
                    }
                })
                .catch(err => {
                    formik.setFieldError('comment', 'Ocurrió un error guardando la reseña.')
                })
        },
    });

    const handleRating = (value: number) => {
        formik.setFieldValue('rating', value);
    };

    const handleComment = (text: string) => {
        formik.setFieldValue('comment', text);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.ratingContainer}>
                {arrayStar.map((star, index) => (
                    <TouchableOpacity key={index} onPress={() => handleRating(star)}>
                        {star <= formik.values.rating ? (<StarFull width={48} height={48} color={'#FFD400'} />) : (<StarEmpty width={48} height={48} color={MyThemme.neutral_gray} />)}
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.ratingText}>Reseña</Text>
            </View>
            <TextInput
                value={formik.values.comment}
                style={styles.commentInput}
                placeholder="Ej: La atención fue increíble."
                onChangeText={handleComment}
                maxLength={maxChars}
                multiline
            />
            <Text style={styles.characterCount}>{formik.values.comment.length}/{maxChars}</Text>
            <View style={styles.buttonContainer}>
                 <ActionButton
                    label={'Guardar reseña'}
                    colorText={MyThemme.neutral_white}
                    disabled={!(formik.dirty && formik.isValid)}
                    onPress={formik.handleSubmit}
                />
            </View>
        </ScrollView>
    );
}