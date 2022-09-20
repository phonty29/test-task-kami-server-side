import { v4 } from 'uuid';
import path from 'path';

class FileService {
	download(files) {
		try {
			if (files.length > 1) {
				return files.map(file => {
					let name = v4() + '.jpg';
					let picPath = path.resolve('files/storage', name);
					file.mv(picPath);
					return name;
				});
			} else {
				let name = v4() + '.jpg';
				let picPath = path.resolve('files/storage', name);
				files.mv(picPath);
				return [name];
			}
		} catch(e) {
			console.log(e);
		}
	}
}

export default new FileService();