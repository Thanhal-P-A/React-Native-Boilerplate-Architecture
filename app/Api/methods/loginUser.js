import Api from '../index';
import ApiConstants from '../apiConstants';

export default function loginUser(params) {
    return Api(
        ApiConstants.LOGIN,
        params,
        'post',
        null
    );
}
