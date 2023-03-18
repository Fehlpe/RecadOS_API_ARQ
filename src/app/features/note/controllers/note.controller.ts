import { HttpHelper } from "../../../shared/util/http.helper";
import { Request, response, Response } from "express";
import { CreateNoteUseCase } from "../usecases/createNote.usecase";
import { NoteRepository } from "../repositories/note.repository";
import { GetUserNotesUseCase } from "../usecases/getUserNotes.usecase";
import { UpdateNoteUseCase } from "../usecases/updateNote.usecase";
import { DeleteNoteUseCase } from "../usecases/deleteNote.usecase";

export class NoteController {
  public async create(req: Request, res: Response) {
    try {
      const usecase = new CreateNoteUseCase(new NoteRepository());
      const result = await usecase.execute(req.body);
      return HttpHelper.sucess(res, result, "Note created");
    } catch (error: any) {
      return HttpHelper.serverError(res, error.toString());
    }
  }

  public async getUserNotes(req: Request, res: Response) {
    try {
      const usecase = new GetUserNotesUseCase(new NoteRepository());
      const result = await usecase.execute(req.query);
      return HttpHelper.sucess(res, result, "Notes returned");
    } catch (error: any) {
      return HttpHelper.serverError(res, error.toString());
    }
  }

  public async updateNote(req: Request, res: Response) {
    try {
      const usecase = new UpdateNoteUseCase(new NoteRepository());
      const result = await usecase.execute(req.body, req.params);
      return HttpHelper.sucess(res, result, "Note updated");
    } catch (error: any) {
      return HttpHelper.serverError(res, error.toString());
    }
  }

  public async deleteNote(req: Request, res: Response) {
    try {
      const usecase = new DeleteNoteUseCase(new NoteRepository());
      const result = await usecase.execute(req.params);
      return HttpHelper.sucess(res, result, "Note deleted");
    } catch (error: any) {
      return HttpHelper.serverError(res, error.toString());
    }
  }
}
