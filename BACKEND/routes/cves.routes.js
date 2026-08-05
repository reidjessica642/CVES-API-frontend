import express from 'express';
import { CvesController } from '../controllers/cves.controller.js';
// import { colorHandler } from '../middleware/colorHandler.middleware.js'; // colorHandler is currently unused - carryover from Lab4

export const cveRouter = express.Router();

/**
 * @swagger
 * /api/v1/cves:
 *   get:
 *     summary: Retrieve a list of CVEs
 *     description: Retrieve a list of Common Vulnerabilities and Exposures from the database.
 *     responses:
 *       200:
 *         description: A list of CVEs.
 */
cveRouter.get('/', CvesController.getCves);

/**
 * @swagger
 * /api/v1/cves/{id}:
 *   get:
 *     summary: Get a CVE by ID
 *     description: Retrieve a specific CVE record by its database ID or CVE identifier.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique identifier for the CVE.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single CVE object.
 *       404:
 *         description: CVE not found.
 */
cveRouter.get('/:id', CvesController.getCveById);

/**
 * @swagger
 * /api/v1/cves:
 *   post:
 *     summary: Create a new CVE
 *     description: Add a new CVE record to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cveId:
 *                 type: string
 *                 example: "CVE-2026-12345"
 *               description:
 *                 type: string
 *                 example: "A descriptive summary of the vulnerability."
 *     responses:
 *       201:
 *         description: Created successfully.
 *       400:
 *         description: Bad request.
 */
cveRouter.post('/', CvesController.createCve);

/**
 * @swagger
 * /api/v1/cves/{id}:
 *   put:
 *     summary: Replace an existing CVE
 *     description: Completely replace a CVE record with new data based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique identifier of the CVE to replace.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cveId:
 *                 type: string
 *                 example: "CVE-2026-12345"
 *               description:
 *                 type: string
 *                 example: "An updated descriptive summary of the vulnerability."
 *     responses:
 *       200:
 *         description: CVE replaced successfully.
 *       404:
 *         description: CVE not found.
 */
cveRouter.put('/:id', CvesController.replaceCve);

/**
 * @swagger
 * /api/v1/cves/{id}:
 *   patch:
 *     summary: Update an existing CVE
 *     description: Partially update a CVE record based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique identifier of the CVE to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *                 example: "A partially updated description."
 *     responses:
 *       200:
 *         description: CVE updated successfully.
 *       404:
 *         description: CVE not found.
 */
cveRouter.patch('/:id', CvesController.updateCve);

/**
 * @swagger
 * /api/v1/cves/{id}:
 *   delete:
 *     summary: Delete a CVE
 *     description: Remove a CVE record from the database by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique identifier of the CVE to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: CVE deleted successfully.
 *       404:
 *         description: CVE not found.
 */
cveRouter.delete('/:id', CvesController.deleteCve);