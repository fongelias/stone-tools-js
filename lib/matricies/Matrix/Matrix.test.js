import assert from 'assert';
import { isMatrix, emptyMatrix, addMatricies, subtractMatricies, matrixDimensions, matrixToArray } from '../../matricies';
import { arraysEqual, arraysDeepEqual } from '../../arrays';


import { Matrix } from './Matrix';


describe('Matrix class', () => {

	const matrixA = [[1,2],[3,4]];
	const matrixAT = [[1,3],[2,4]];


	it('should return a Matrix', () => {
		const matrix = new Matrix(2,2);

		assert(matrix instanceof Matrix);
	})

	it('should throw an error if there are no arguments', () => {
		let testPassed = false;

		try {
			const matrix = new Matrix();
		} catch(e) {
			testPassed = true;
		}

		assert(testPassed);
	})

	it('should have a matrix property', () => {
		const matrix = new Matrix(2,2);

		assert(matrix.matrix);
	})

	it('should return an empty matrix of specified size when supplied row and column arguments', () =>{
		const matrix = new Matrix(2,2);

		assert(arraysDeepEqual(matrix.matrix, emptyMatrix(2,2)));
	})

	it('should contain the supplied matrix when specified', () => {
		const matrix = new Matrix(matrixA);

		assert(arraysDeepEqual(matrix.matrix, matrixA));
	})



	//Integration tests
	describe('#copy()', () => {

		let testMatrix = new Matrix(matrixA);
		let newMatrix = testMatrix.copy();

		it('should return a Matrix', () => {
			assert(newMatrix instanceof Matrix);
		})

		it('should return a new Matrix with the correct properties', () => {
			const isNew = newMatrix != testMatrix;
			const hasCorrectProperties = arraysDeepEqual(newMatrix.matrix,testMatrix.matrix);

			assert(isNew && hasCorrectProperties);
		})
	})

	describe('#add()', () => {

		it('should modify the Matrix correctly using another Matrix', () => {
			let testMatrix = new Matrix(matrixA);
			let testMatrix2 = new Matrix(matrixA);
			const expectedMatrix = addMatricies(matrixA,matrixA);

			testMatrix.add(testMatrix2);

			assert(arraysDeepEqual(testMatrix.matrix, expectedMatrix));
		})

		it('should modify the Matrix correctly using a valid matrix array', () => {
			let testMatrix = new Matrix(matrixA);
			const expectedMatrix = addMatricies(matrixA,matrixA);

			testMatrix.add(matrixA);

			assert(arraysDeepEqual(testMatrix.matrix, expectedMatrix));
		})

		it('should return the object', () => {
			let testMatrix = new Matrix(matrixA);

			assert(testMatrix.add(matrixA) == testMatrix);
		})
	})

	describe('#subtract()', () => {

		it('should modify the Matrix correctly using another Matrix', () => {
			let testMatrix = new Matrix(matrixA);
			let testMatrix2 = new Matrix(matrixA);
			const expectedMatrix = subtractMatricies(matrixA,matrixA);

			testMatrix.subtract(testMatrix2);

			assert(arraysDeepEqual(testMatrix.matrix, expectedMatrix));
		})

		it('should modify the Matrix correctly using a valid matrix array', () => {
			let testMatrix = new Matrix(matrixA);
			const expectedMatrix = subtractMatricies(matrixA,matrixA);

			testMatrix.subtract(matrixA);

			assert(arraysDeepEqual(testMatrix.matrix, expectedMatrix));
		})

		it('should return the object', () => {
			let testMatrix = new Matrix(matrixA);

			assert(testMatrix.subtract(matrixA) == testMatrix);
		})
	})

	describe('#map()', () => {

		it('should return a new Matrix', () => {
			assert(false);
		})

		it('should correctly modify the new Matrix', () => {
			assert(false);
		})
	})

	describe('#hadamardProduct()', () => {

		it('should modify the Matrix correctly using another Matrix', () => {
			assert(false);
		})

		it('should modify the Matrix correctly using a valid matrix array', () => {
			assert(false);
		})

		it('should return the object', () => {
			let testMatrix = new Matrix(matrixA);

			assert(testMatrix.hadamardProduct(matrixA) == testMatrix);
		})
	})

	describe('#dimensions()', () => {

		let testMatrix = new Matrix(matrixA);

		it('should return an array', () => {
			assert(Array.isArray(testMatrix.dimensions()));
		})

		it('should return the correct dimensions', () => {
			assert(arraysEqual(testMatrix.dimensions(),matrixDimensions(matrixA)));
		})
	})

	describe('#toArray()', () => {

		let testMatrix = new Matrix(matrixA);

		it('should return an array', () => {
			assert(Array.isArray(testMatrix.toArray()));
		})

		it('should return the correct array', () => {
			assert(arraysEqual(testMatrix.toArray(), matrixToArray(matrixA)));
		})
	})

	describe('#randomize()', () => {

		it('should randomize values in the Matrix between specified values', () => {
			assert(false);
		})

		it('should return the object', () => {
			let testMatrix = new Matrix(matrixA);

			assert(testMatrix.randomize() == testMatrix);
		})
	})

	describe('#transpose()', () => {

		it('should transpose the values in the Matrix between specified values', () => {
			let testMatrix = new Matrix(matrixA);

			assert(arraysDeepEqual(testMatrix.transpose().matrix, matrixAT));
		})

		it('should return the object', () => {
			let testMatrix = new Matrix(matrixA);

			assert(testMatrix.transpose() == testMatrix);
		})
	})


})


